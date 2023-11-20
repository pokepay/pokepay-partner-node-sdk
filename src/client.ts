import axios, { AxiosError } from 'axios';
import ini from "ini";
import fs from "fs";
import path from "path";
import https from "https";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import base64url from "base64-url";
import { Request } from "./request/Request";
import { Response } from "./response/Response";

interface ClientConfig {
  clientId: string;
  clientSecret: string;
  apiBaseUrl: string;
  sslKeyFile: string;
  sslCertFile: string;
  timezone: string;
  timeout: number;
}

class Client {
  private static encrypt_data(data: string, key: Buffer, iv?: Buffer): string {
    iv ||= crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const enc1 = cipher.update("0000000000000000" + data, "utf-8");
    const enc2 = cipher.final();
    return base64url.escape(Buffer.concat([enc1, enc2]).toString("base64"));
  }

  private static decrypt_data(data: string, key: Buffer, iv?: Buffer): string {
    const buff = Buffer.from(base64url.unescape(data), "base64");
    iv ||= buff.slice(0, 16);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    const dec1 = decipher.update(buff);
    const dec2 = decipher.final();
    return Buffer.concat([dec1, dec2]).slice(16).toString();
  }

  private static checkURL(url: string): string {
    const regex = new RegExp(
      "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
    );
    if (!regex.test(url)) {
      throw new Error("base url is not a valid URL");
    }
    return url;
  }

  private static readConf(configPath: string): ClientConfig {
    const configPathResolved = (configPath.startsWith('~')) ?
      path.join(process.env.HOME!, configPath.slice(1)) :
      configPath;
    const conf = ini.parse(fs.readFileSync(configPathResolved, "utf-8"));
    const throw_err = (e: Error) => {
      throw e;
    };
    const mustget = (n: string): string =>
      conf[n] || throw_err(new Error(`'${n}' is not set in config file.`));
    const clientId = mustget("CLIENT_ID");
    const clientSecret = mustget("CLIENT_SECRET");
    const apiBaseUrl = Client.checkURL(mustget("API_BASE_URL"));
    if (!apiBaseUrl.startsWith("https")) {
      throw new Error("API_BASE_URL should be https://");
    }
    const sslKeyFile = mustget("SSL_KEY_FILE");
    const sslCertFile = mustget("SSL_CERT_FILE");
    const timezone = mustget("TIMEZONE");
    const timeout = parseInt(mustget("TIMEOUT"));
    if (Number.isNaN(timeout)) {
      throw new Error("TIMEOUT must be set as int (sec)");
    }
    return {
      clientId,
      clientSecret,
      apiBaseUrl,
      sslKeyFile,
      sslCertFile,
      timezone,
      timeout,
    };
  }

  private static sharedConf: ClientConfig | undefined;
  private static sharedHttpsAgent: https.Agent | undefined;

  private conf: ClientConfig;
  private httpsAgent: https.Agent;

  public constructor(configPath: string, sharedClient = true) {
    this.conf =
      sharedClient && Client.sharedConf
        ? Client.sharedConf
        : Client.readConf(configPath);
    this.httpsAgent =
      sharedClient && Client.sharedHttpsAgent
        ? Client.sharedHttpsAgent
        : new https.Agent({
            cert: fs.readFileSync(this.conf.sslCertFile),
            key: fs.readFileSync(this.conf.sslKeyFile),
            timeout: this.conf.timeout * 1000, // ms
          });
    Client.sharedConf ||= this.conf;
    Client.sharedHttpsAgent ||= this.httpsAgent;
  }

  public async send<R>(req: Request<R>): Promise<Response<R>> {
    const enc = {
      request_data: req.bodyParams,
      timestamp: new Date().toISOString(),
      partner_call_id: uuidv4(),
    };
    const key = Buffer.from(base64url.unescape(this.conf.clientSecret), "base64");
    const data = {
      partner_client_id: this.conf.clientId,
      data: Client.encrypt_data(JSON.stringify(enc), key),
    };

    let result;

    try {
      result = await axios({
        method: req.method,
        url: `${this.conf.apiBaseUrl}${req.path}`,
        httpsAgent: this.httpsAgent,
        data,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data.response_data) {
        error.response.data = JSON.parse(Client.decrypt_data(error.response.data.response_data, key));
      }
      throw error;
    }

    const { response_data } = result.data;
    if (!response_data) {
      // "response_data" was not found in response? it maybe Ping?
      return new Response(result, result.data);
    }
    const object = JSON.parse(Client.decrypt_data(response_data, key)) as R;
    return new Response(result, object);
  }
}

export { Client };

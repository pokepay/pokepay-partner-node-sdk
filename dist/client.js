"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = __importDefault(require("axios"));
const ini_1 = __importDefault(require("ini"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const uuid_1 = require("uuid");
const crypto_1 = __importDefault(require("crypto"));
const base64_url_1 = __importDefault(require("base64-url"));
const Response_1 = require("./response/Response");
class Client {
    constructor(configPath, sharedClient = true) {
        this.conf =
            sharedClient && Client.sharedConf
                ? Client.sharedConf
                : Client.readConf(configPath);
        this.httpsAgent =
            sharedClient && Client.sharedHttpsAgent
                ? Client.sharedHttpsAgent
                : new https_1.default.Agent({
                    cert: fs_1.default.readFileSync(this.conf.sslCertFile),
                    key: fs_1.default.readFileSync(this.conf.sslKeyFile),
                    timeout: this.conf.timeout * 1000, // ms
                });
        Client.sharedConf || (Client.sharedConf = this.conf);
        Client.sharedHttpsAgent || (Client.sharedHttpsAgent = this.httpsAgent);
    }
    static encrypt_data(data, key, iv) {
        iv || (iv = crypto_1.default.randomBytes(16));
        const cipher = crypto_1.default.createCipheriv("aes-256-cbc", key, iv);
        const enc1 = cipher.update("0000000000000000" + data, "utf-8");
        const enc2 = cipher.final();
        return base64_url_1.default.escape(Buffer.concat([enc1, enc2]).toString("base64"));
    }
    static decrypt_data(data, key, iv) {
        const buff = Buffer.from(base64_url_1.default.unescape(data), "base64");
        iv || (iv = buff.slice(0, 16));
        const decipher = crypto_1.default.createDecipheriv("aes-256-cbc", key, iv);
        const dec1 = decipher.update(buff);
        const dec2 = decipher.final();
        return Buffer.concat([dec1, dec2]).slice(16).toString();
    }
    static checkURL(url) {
        const regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
        if (!regex.test(url)) {
            throw new Error("base url is not a valid URL");
        }
        return url;
    }
    static readConf(configPath) {
        const configPathResolved = (configPath.startsWith('~')) ?
            path_1.default.join(process.env.HOME, configPath.slice(1)) :
            configPath;
        const conf = ini_1.default.parse(fs_1.default.readFileSync(configPathResolved, "utf-8"));
        const throw_err = (e) => {
            throw e;
        };
        const mustget = (n) => conf[n] || throw_err(new Error(`'${n}' is not set in config file.`));
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
    async send(req) {
        const enc = {
            request_data: req.bodyParams,
            timestamp: new Date().toISOString(),
            partner_call_id: (0, uuid_1.v4)(),
        };
        const key = Buffer.from(base64_url_1.default.unescape(this.conf.clientSecret), "base64");
        const data = {
            partner_client_id: this.conf.clientId,
            data: Client.encrypt_data(JSON.stringify(enc), key),
        };
        let result;
        try {
            result = await (0, axios_1.default)({
                method: req.method,
                url: `${this.conf.apiBaseUrl}${req.path}`,
                httpsAgent: this.httpsAgent,
                data,
            });
        }
        catch (e) {
            if (axios_1.default.isAxiosError(e) && e.response &&
                e.response.headers['content-type'] == 'application/json' &&
                e.response.data.response_data) {
                e.response.data = JSON.parse(Client.decrypt_data(e.response.data.response_data, key));
            }
            throw e;
        }
        const { response_data } = result.data;
        if (!response_data) {
            // "response_data" was not found in response? it maybe Ping?
            return new Response_1.Response(result, result.data);
        }
        const object = JSON.parse(Client.decrypt_data(response_data, key));
        return new Response_1.Response(result, object);
    }
}
exports.Client = Client;

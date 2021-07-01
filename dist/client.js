"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = __importDefault(require("axios"));
const ini_1 = __importDefault(require("ini"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const uuid_1 = require("uuid");
const crypto_1 = __importDefault(require("crypto"));
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
        return Buffer.concat([enc1, enc2]).toString("base64url");
    }
    static decrypt_data(data, key, iv) {
        const buff = Buffer.from(data, "base64url");
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
        const conf = ini_1.default.parse(fs_1.default.readFileSync(configPath, "utf-8"));
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
        if (timeout == NaN) {
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
    send(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const enc = {
                request_data: req.bodyParams,
                timestamp: new Date().toISOString(),
                partner_call_id: uuid_1.v4(),
            };
            const key = Buffer.from(this.conf.clientSecret, "base64url");
            const data = {
                partner_client_id: this.conf.clientId,
                data: Client.encrypt_data(JSON.stringify(enc), key),
            };
            const result = yield axios_1.default({
                method: req.method,
                url: `${this.conf.apiBaseUrl}${req.path}`,
                httpsAgent: this.httpsAgent,
                data,
            });
            const { response_data } = result.data;
            if (!response_data) {
                throw new Error(`Response data is invalid ${result.data}`);
            }
            const object = JSON.parse(Client.decrypt_data(response_data, key));
            return new Response_1.Response(result, object);
        });
    }
}
exports.Client = Client;

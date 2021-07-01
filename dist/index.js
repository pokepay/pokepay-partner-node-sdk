"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const version_1 = require("./version");
const Request_1 = require("./request/Request");
__exportStar(require("./client"), exports);
__exportStar(require("./version"), exports);
__exportStar(require("./request/Request"), exports);
__exportStar(require("./response/Response"), exports);
function example() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Pokepay partner SDK ${version_1.VERSION} example.`);
        try {
            const configPath = process.argv[2];
            if (!configPath) {
                throw new Error("Please specify config file path. ex) $ npm run dev -- config.ini");
            }
            const client = new client_1.Client(configPath);
            const req = new Request_1.SendEcho({ message: "echo message? echo PLEASE!" });
            const res = yield client.send(req);
            console.log("response:", res);
            console.log("response.object:", res.object);
            console.log("response.object.message:", res.object.message);
        }
        catch (e) {
            console.error(e.message);
            process.exit(1);
        }
    });
}
if (require.main === module) {
    example().then(() => {
        console.log("example finished!");
    });
}

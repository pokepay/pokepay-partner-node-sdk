"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEcho = void 0;
class SendEcho {
    constructor(b) {
        this.path = "/echo";
        this.method = "POST";
        this.bodyParams = b;
    }
}
exports.SendEcho = SendEcho;

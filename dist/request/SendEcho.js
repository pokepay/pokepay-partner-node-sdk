"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEcho = void 0;
class SendEcho {
    constructor({ message }) {
        this.path = "/echo";
        this.method = "POST";
        this.bodyParams = { message };
    }
}
exports.SendEcho = SendEcho;

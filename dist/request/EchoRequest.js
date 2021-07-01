"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoRequest = void 0;
class EchoRequest {
    constructor({ message }) {
        this.path = "/echo";
        this.method = "POST";
        this.bodyParams = { message };
    }
}
exports.EchoRequest = EchoRequest;

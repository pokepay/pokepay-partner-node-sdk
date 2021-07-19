"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(res, obj) {
        this.body = res.data;
        this.object = obj;
        this.code = res.status;
        this.header = res.headers;
        this.message = res.data;
    }
}
exports.Response = Response;

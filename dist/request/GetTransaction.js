"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransaction = void 0;
class GetTransaction {
    constructor(transaction_id) {
        this.method = "GET";
        this.bodyParams = {};
        this.path = "/transactions" + "/" + transaction_id;
    }
}
exports.GetTransaction = GetTransaction;

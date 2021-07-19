"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundTransaction = void 0;
class RefundTransaction {
    constructor(transaction_id, bodyParams) {
        this.method = "POST";
        this.bodyParams = bodyParams !== null && bodyParams !== void 0 ? bodyParams : {};
        this.path = "/transactions" + "/" + transaction_id + "/refund";
    }
}
exports.RefundTransaction = RefundTransaction;

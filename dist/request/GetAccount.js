"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccount = void 0;
class GetAccount {
    constructor(params) {
        this.method = "GET";
        if (params.account_id === void 0)
            throw new Error('"account_id" is required');
        this.path = "/accounts" + "/" + params.account_id;
        this.bodyParams = {};
    }
}
exports.GetAccount = GetAccount;

"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAccountExpiredBalances = void 0;
class ListAccountExpiredBalances {
    constructor(account_id, bodyParams) {
        this.method = "GET";
        this.bodyParams = bodyParams;
        this.path = "/accounts" + "/" + account_id + "/expired-balances";
    }
}
exports.ListAccountExpiredBalances = ListAccountExpiredBalances;
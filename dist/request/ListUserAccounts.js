"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserAccounts = void 0;
class ListUserAccounts {
    constructor(params) {
        this.method = "GET";
        if (params.user_id === void 0)
            throw new Error('"user_id" is required');
        this.path = "/users" + "/" + params.user_id + "/accounts";
        this.bodyParams = {};
        if (params.page !== void 0)
            this.bodyParams.page = params.page;
        if (params.per_page !== void 0)
            this.bodyParams.per_page = params.per_page;
    }
}
exports.ListUserAccounts = ListUserAccounts;

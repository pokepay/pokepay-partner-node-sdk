"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopAccounts = void 0;
class GetShopAccounts {
    constructor(params) {
        this.method = "GET";
        if (params.private_money_id === void 0)
            throw new Error('"private_money_id" is required');
        this.path = "/accounts" + "/shops";
        this.bodyParams = {
            private_money_id: params.private_money_id,
        };
        if (params.page !== void 0)
            this.bodyParams.page = params.page;
        if (params.per_page !== void 0)
            this.bodyParams.per_page = params.per_page;
        if (params.created_at_from !== void 0)
            this.bodyParams.created_at_from = params.created_at_from;
        if (params.created_at_to !== void 0)
            this.bodyParams.created_at_to = params.created_at_to;
        if (params.is_suspended !== void 0)
            this.bodyParams.is_suspended = params.is_suspended;
    }
}
exports.GetShopAccounts = GetShopAccounts;

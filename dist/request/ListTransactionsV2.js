"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransactionsV2 = void 0;
class ListTransactionsV2 {
    constructor(params) {
        this.method = "GET";
        this.path = "/transactions-v2";
        this.bodyParams = {};
        if (params === void 0)
            return;
        if (params.private_money_id !== void 0)
            this.bodyParams.private_money_id = params.private_money_id;
        if (params.organization_code !== void 0)
            this.bodyParams.organization_code = params.organization_code;
        if (params.shop_id !== void 0)
            this.bodyParams.shop_id = params.shop_id;
        if (params.terminal_id !== void 0)
            this.bodyParams.terminal_id = params.terminal_id;
        if (params.customer_id !== void 0)
            this.bodyParams.customer_id = params.customer_id;
        if (params.customer_name !== void 0)
            this.bodyParams.customer_name = params.customer_name;
        if (params.description !== void 0)
            this.bodyParams.description = params.description;
        if (params.transaction_id !== void 0)
            this.bodyParams.transaction_id = params.transaction_id;
        if (params.is_modified !== void 0)
            this.bodyParams.is_modified = params.is_modified;
        if (params.types !== void 0)
            this.bodyParams.types = params.types;
        if (params.from !== void 0)
            this.bodyParams.from = params.from;
        if (params.to !== void 0)
            this.bodyParams.to = params.to;
        if (params.next_page_cursor_id !== void 0)
            this.bodyParams.next_page_cursor_id = params.next_page_cursor_id;
        if (params.prev_page_cursor_id !== void 0)
            this.bodyParams.prev_page_cursor_id = params.prev_page_cursor_id;
        if (params.per_page !== void 0)
            this.bodyParams.per_page = params.per_page;
    }
}
exports.ListTransactionsV2 = ListTransactionsV2;

"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkCreateTransaction = void 0;
class BulkCreateTransaction {
    constructor(params) {
        this.method = "POST";
        if (params.name === void 0)
            throw new Error('"name" is required');
        if (params.content === void 0)
            throw new Error('"content" is required');
        if (params.request_id === void 0)
            throw new Error('"request_id" is required');
        this.path = "/transactions" + "/bulk";
        this.bodyParams = {
            name: params.name,
            content: params.content,
            request_id: params.request_id,
        };
        if (params.description !== void 0)
            this.bodyParams.description = params.description;
        if (params.private_money_id !== void 0)
            this.bodyParams.private_money_id = params.private_money_id;
    }
}
exports.BulkCreateTransaction = BulkCreateTransaction;

"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExchangeTransaction = void 0;
class CreateExchangeTransaction {
    constructor(params) {
        this.method = "POST";
        if (params.user_id === void 0)
            throw new Error('"user_id" is required');
        if (params.sender_private_money_id === void 0)
            throw new Error('"sender_private_money_id" is required');
        if (params.receiver_private_money_id === void 0)
            throw new Error('"receiver_private_money_id" is required');
        if (params.amount === void 0)
            throw new Error('"amount" is required');
        this.path = "/transactions" + "/exchange";
        this.bodyParams = {
            user_id: params.user_id,
            sender_private_money_id: params.sender_private_money_id,
            receiver_private_money_id: params.receiver_private_money_id,
            amount: params.amount,
        };
        if (params.description !== void 0)
            this.bodyParams.description = params.description;
        if (params.request_id !== void 0)
            this.bodyParams.request_id = params.request_id;
    }
}
exports.CreateExchangeTransaction = CreateExchangeTransaction;

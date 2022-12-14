"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPrivateMoneySummary = void 0;
class GetPrivateMoneySummary {
    constructor(params) {
        this.method = "GET";
        if (params.private_money_id === void 0)
            throw new Error('"private_money_id" is required');
        this.path = "/private-moneys" + "/" + params.private_money_id + "/summary";
        this.bodyParams = {};
        if (params.from !== void 0)
            this.bodyParams.from = params.from;
        if (params.to !== void 0)
            this.bodyParams.to = params.to;
    }
}
exports.GetPrivateMoneySummary = GetPrivateMoneySummary;
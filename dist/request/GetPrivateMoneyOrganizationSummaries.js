"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPrivateMoneyOrganizationSummaries = void 0;
class GetPrivateMoneyOrganizationSummaries {
    constructor(private_money_id, bodyParams) {
        this.method = "GET";
        this.bodyParams = bodyParams;
        this.path = "/private-moneys" + "/" + private_money_id + "/organization-summaries";
    }
}
exports.GetPrivateMoneyOrganizationSummaries = GetPrivateMoneyOrganizationSummaries;

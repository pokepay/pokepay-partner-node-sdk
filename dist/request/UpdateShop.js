"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShop = void 0;
class UpdateShop {
    constructor(params) {
        this.method = "PATCH";
        if (params.shop_id === void 0)
            throw new Error('"shop_id" is required');
        this.path = "/shops" + "/" + params.shop_id;
        this.bodyParams = {};
        if (params.name !== void 0)
            this.bodyParams.name = params.name;
        if (params.postal_code !== void 0)
            this.bodyParams.postal_code = params.postal_code;
        if (params.address !== void 0)
            this.bodyParams.address = params.address;
        if (params.tel !== void 0)
            this.bodyParams.tel = params.tel;
        if (params.email !== void 0)
            this.bodyParams.email = params.email;
        if (params.external_id !== void 0)
            this.bodyParams.external_id = params.external_id;
        if (params.private_money_ids !== void 0)
            this.bodyParams.private_money_ids = params.private_money_ids;
        if (params.can_topup_private_money_ids !== void 0)
            this.bodyParams.can_topup_private_money_ids = params.can_topup_private_money_ids;
        if (params.status !== void 0)
            this.bodyParams.status = params.status;
    }
}
exports.UpdateShop = UpdateShop;

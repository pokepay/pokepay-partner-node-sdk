"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShop = void 0;
class GetShop {
    constructor(params) {
        this.method = "GET";
        if (params.shop_id === void 0)
            throw new Error('"shop_id" is required');
        this.path = "/shops" + "/" + params.shop_id;
        this.bodyParams = {};
    }
}
exports.GetShop = GetShop;

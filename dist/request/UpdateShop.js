"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShop = void 0;
class UpdateShop {
    constructor(shop_id, bodyParams) {
        this.method = "PATCH";
        this.bodyParams = bodyParams !== null && bodyParams !== void 0 ? bodyParams : {};
        this.path = "/shops" + "/" + shop_id;
    }
}
exports.UpdateShop = UpdateShop;

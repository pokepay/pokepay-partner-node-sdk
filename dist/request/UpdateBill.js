"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBill = void 0;
class UpdateBill {
    constructor(bill_id, bodyParams) {
        this.method = "PATCH";
        this.bodyParams = bodyParams !== null && bodyParams !== void 0 ? bodyParams : {};
        this.path = "/bills" + "/" + bill_id;
    }
}
exports.UpdateBill = UpdateBill;

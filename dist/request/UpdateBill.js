"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBill = void 0;
class UpdateBill {
    constructor(bill_id, bodyParams) {
        this.method = "PATCH";
        this.bodyParams = bodyParams;
        this.path = "/bills" + "/" + bill_id;
    }
}
exports.UpdateBill = UpdateBill;
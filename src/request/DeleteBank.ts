// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { BankDeleted } from "../response/BankDeleted";

class DeleteBank implements Request<BankDeleted> {
  public readonly __r: BankDeleted | undefined;
  public readonly method: Method = "DELETE";
  public readonly path: string;
  public readonly bodyParams: {
    bank_id: string
  };
  public constructor(params: {
    user_device_id: string,
    bank_id: string
  }) {
    if (params.user_device_id === void 0) throw new Error('"user_device_id" is required');
    if (params.bank_id === void 0) throw new Error('"bank_id" is required');
    this.path = "/user-devices" + "/" + params.user_device_id + "/banks";
    this.bodyParams = {
      bank_id: params.bank_id,
    };
  }
}

export { DeleteBank };

// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { Transfer } from "../response/Transfer";

class RefundTransaction implements Request<Transfer> {
  public readonly __r: Transfer | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    description?: string
  };
  public constructor(params: {
    transaction_id: string,
    description?: string
  }) {
    if (params.transaction_id === void 0) throw new Error('"transaction_id" is required');
    this.path = "/transactions" + "/" + params.transaction_id + "/refund";
    this.bodyParams = {};
    if (params.description !== void 0) this.bodyParams.description = params.description;
  }
}

export { RefundTransaction };

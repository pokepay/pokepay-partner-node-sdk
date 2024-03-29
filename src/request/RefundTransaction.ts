// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";

class RefundTransaction implements Request<TransactionDetail> {
  public readonly __r: TransactionDetail | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    description?: string,
    returning_point_expires_at?: string
  };
  public constructor(params: {
    transaction_id: string,
    description?: string,
    returning_point_expires_at?: string
  }) {
    if (params.transaction_id === void 0) throw new Error('"transaction_id" is required');
    this.path = "/transactions" + "/" + params.transaction_id + "/refund";
    this.bodyParams = {};
    if (params.description !== void 0) this.bodyParams.description = params.description;
    if (params.returning_point_expires_at !== void 0) this.bodyParams.returning_point_expires_at = params.returning_point_expires_at;
  }
}

export { RefundTransaction };

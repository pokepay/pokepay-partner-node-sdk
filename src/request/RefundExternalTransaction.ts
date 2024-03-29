// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { ExternalTransactionDetail } from "../response/ExternalTransactionDetail";

class RefundExternalTransaction implements Request<ExternalTransactionDetail> {
  public readonly __r: ExternalTransactionDetail | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    description?: string
  };
  public constructor(params: {
    event_id: string,
    description?: string
  }) {
    if (params.event_id === void 0) throw new Error('"event_id" is required');
    this.path = "/external-transactions" + "/" + params.event_id + "/refund";
    this.bodyParams = {};
    if (params.description !== void 0) this.bodyParams.description = params.description;
  }
}

export { RefundExternalTransaction };

// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { AccountTransferSummary } from "../response/AccountTransferSummary";

class GetAccountTransferSummary implements Request<AccountTransferSummary> {
  public readonly __r: AccountTransferSummary | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    from?: string,
    to?: string,
    transfer_types?: string[]
  };
  public constructor(params: {
    account_id: string,
    from?: string,
    to?: string,
    transfer_types?: string[]
  }) {
    if (params.account_id === void 0) throw new Error('"account_id" is required');
    this.path = "/accounts" + "/" + params.account_id + "/transfers" + "/summary";
    this.bodyParams = {};
    if (params.from !== void 0) this.bodyParams.from = params.from;
    if (params.to !== void 0) this.bodyParams.to = params.to;
    if (params.transfer_types !== void 0) this.bodyParams.transfer_types = params.transfer_types;
  }
}

export { GetAccountTransferSummary };
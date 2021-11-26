// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { AccountDetail } from "../response/AccountDetail";

class UpdateAccount implements Request<AccountDetail> {
  public readonly __r: AccountDetail | undefined;
  public readonly method: Method = "PATCH";
  public readonly path: string;
  public readonly bodyParams: {
    is_suspended?: boolean,
    status?: string,
    can_transfer_topup?: boolean
  };
  public constructor(params: {
    account_id: string,
    is_suspended?: boolean,
    status?: string,
    can_transfer_topup?: boolean
  }) {
    if (params.account_id === void 0) throw new Error('"account_id" is required');
    this.path = "/accounts" + "/" + params.account_id;
    this.bodyParams = {};
    if (params.is_suspended !== void 0) this.bodyParams.is_suspended = params.is_suspended;
    if (params.status !== void 0) this.bodyParams.status = params.status;
    if (params.can_transfer_topup !== void 0) this.bodyParams.can_transfer_topup = params.can_transfer_topup;
  }
}

export { UpdateAccount };

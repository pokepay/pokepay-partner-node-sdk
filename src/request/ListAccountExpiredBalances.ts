// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedAccountBalance } from "../response/PaginatedAccountBalance";

class ListAccountExpiredBalances implements Request<PaginatedAccountBalance> {
  public readonly __r: PaginatedAccountBalance | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    page?: number,
    per_page?: number,
    expires_at_from?: string,
    expires_at_to?: string,
    direction?: string
  };
  public constructor(account_id: string, bodyParams: {
    page?: number,
    per_page?: number,
    expires_at_from?: string,
    expires_at_to?: string,
    direction?: string
  }) {
    this.bodyParams = bodyParams;
    this.path = "/accounts" + "/" + account_id + "/expired-balances";
  }
}

export { ListAccountExpiredBalances };

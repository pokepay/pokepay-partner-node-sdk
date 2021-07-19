// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedTransaction } from "../response/PaginatedTransaction";

class ListTransactions implements Request<PaginatedTransaction> {
  public readonly __r: PaginatedTransaction | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    from?: string,
    to?: string,
    page?: number,
    per_page?: number,
    shop_id?: string,
    customer_id?: string,
    customer_name?: string,
    terminal_id?: string,
    transaction_id?: string,
    organization_code?: string,
    private_money_id?: string,
    is_modified?: boolean,
    types?: string[]
  };
  public constructor(bodyParams: {
    from?: string,
    to?: string,
    page?: number,
    per_page?: number,
    shop_id?: string,
    customer_id?: string,
    customer_name?: string,
    terminal_id?: string,
    transaction_id?: string,
    organization_code?: string,
    private_money_id?: string,
    is_modified?: boolean,
    types?: string[]
  }) {
    this.bodyParams = bodyParams;
    this.path = "/transactions";
  }
}

export { ListTransactions };

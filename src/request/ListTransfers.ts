// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedTransfers } from "../response/PaginatedTransfers";

class ListTransfers implements Request<PaginatedTransfers> {
  public readonly __r: PaginatedTransfers | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    from?: string,
    to?: string,
    page?: number,
    per_page?: number,
    shop_id?: string,
    shop_name?: string,
    customer_id?: string,
    customer_name?: string,
    transaction_id?: string,
    private_money_id?: string,
    is_modified?: boolean,
    transaction_types?: string[],
    transfer_types?: string[]
  };
  public constructor(bodyParams?: {
    from?: string,
    to?: string,
    page?: number,
    per_page?: number,
    shop_id?: string,
    shop_name?: string,
    customer_id?: string,
    customer_name?: string,
    transaction_id?: string,
    private_money_id?: string,
    is_modified?: boolean,
    transaction_types?: string[],
    transfer_types?: string[]
  }) {
    this.bodyParams = bodyParams ?? {};
    this.path = "/transfers";
  }
}

export { ListTransfers };

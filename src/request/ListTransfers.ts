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
  public constructor(params?: {
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
    this.path = "/transfers";
    this.bodyParams = {};
    if (params === void 0) return;
    if (params.from !== void 0) this.bodyParams.from = params.from;
    if (params.to !== void 0) this.bodyParams.to = params.to;
    if (params.page !== void 0) this.bodyParams.page = params.page;
    if (params.per_page !== void 0) this.bodyParams.per_page = params.per_page;
    if (params.shop_id !== void 0) this.bodyParams.shop_id = params.shop_id;
    if (params.shop_name !== void 0) this.bodyParams.shop_name = params.shop_name;
    if (params.customer_id !== void 0) this.bodyParams.customer_id = params.customer_id;
    if (params.customer_name !== void 0) this.bodyParams.customer_name = params.customer_name;
    if (params.transaction_id !== void 0) this.bodyParams.transaction_id = params.transaction_id;
    if (params.private_money_id !== void 0) this.bodyParams.private_money_id = params.private_money_id;
    if (params.is_modified !== void 0) this.bodyParams.is_modified = params.is_modified;
    if (params.transaction_types !== void 0) this.bodyParams.transaction_types = params.transaction_types;
    if (params.transfer_types !== void 0) this.bodyParams.transfer_types = params.transfer_types;
  }
}

export { ListTransfers };

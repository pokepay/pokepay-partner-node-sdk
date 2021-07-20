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
  public constructor(params?: {
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
    this.path = "/transactions";
    this.bodyParams = {};
    if (params === void 0) return;
    if (params.from !== void 0) this.bodyParams.from = params.from;
    if (params.to !== void 0) this.bodyParams.to = params.to;
    if (params.page !== void 0) this.bodyParams.page = params.page;
    if (params.per_page !== void 0) this.bodyParams.per_page = params.per_page;
    if (params.shop_id !== void 0) this.bodyParams.shop_id = params.shop_id;
    if (params.customer_id !== void 0) this.bodyParams.customer_id = params.customer_id;
    if (params.customer_name !== void 0) this.bodyParams.customer_name = params.customer_name;
    if (params.terminal_id !== void 0) this.bodyParams.terminal_id = params.terminal_id;
    if (params.transaction_id !== void 0) this.bodyParams.transaction_id = params.transaction_id;
    if (params.organization_code !== void 0) this.bodyParams.organization_code = params.organization_code;
    if (params.private_money_id !== void 0) this.bodyParams.private_money_id = params.private_money_id;
    if (params.is_modified !== void 0) this.bodyParams.is_modified = params.is_modified;
    if (params.types !== void 0) this.bodyParams.types = params.types;
  }
}

export { ListTransactions };

// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedBills } from "../response/PaginatedBills";

class ListBills implements Request<PaginatedBills> {
  public readonly __r: PaginatedBills | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    page?: number,
    per_page?: number,
    bill_id?: string,
    private_money_id?: string,
    organization_code?: string,
    description?: string,
    created_from?: string,
    created_to?: string,
    shop_name?: string,
    shop_id?: string,
    lower_limit_amount?: number,
    upper_limit_amount?: number,
    is_disabled?: boolean
  };
  public constructor(params?: {
    page?: number,
    per_page?: number,
    bill_id?: string,
    private_money_id?: string,
    organization_code?: string,
    description?: string,
    created_from?: string,
    created_to?: string,
    shop_name?: string,
    shop_id?: string,
    lower_limit_amount?: number,
    upper_limit_amount?: number,
    is_disabled?: boolean
  }) {
    this.path = "/bills";
    this.bodyParams = {};
    if (params === void 0) return;
    if (params.page !== void 0) this.bodyParams.page = params.page;
    if (params.per_page !== void 0) this.bodyParams.per_page = params.per_page;
    if (params.bill_id !== void 0) this.bodyParams.bill_id = params.bill_id;
    if (params.private_money_id !== void 0) this.bodyParams.private_money_id = params.private_money_id;
    if (params.organization_code !== void 0) this.bodyParams.organization_code = params.organization_code;
    if (params.description !== void 0) this.bodyParams.description = params.description;
    if (params.created_from !== void 0) this.bodyParams.created_from = params.created_from;
    if (params.created_to !== void 0) this.bodyParams.created_to = params.created_to;
    if (params.shop_name !== void 0) this.bodyParams.shop_name = params.shop_name;
    if (params.shop_id !== void 0) this.bodyParams.shop_id = params.shop_id;
    if (params.lower_limit_amount !== void 0) this.bodyParams.lower_limit_amount = params.lower_limit_amount;
    if (params.upper_limit_amount !== void 0) this.bodyParams.upper_limit_amount = params.upper_limit_amount;
    if (params.is_disabled !== void 0) this.bodyParams.is_disabled = params.is_disabled;
  }
}

export { ListBills };

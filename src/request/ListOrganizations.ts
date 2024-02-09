// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedOrganizations } from "../response/PaginatedOrganizations";

class ListOrganizations implements Request<PaginatedOrganizations> {
  public readonly __r: PaginatedOrganizations | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    private_money_id: string,
    page?: number,
    per_page?: number,
    name?: string,
    code?: string
  };
  public constructor(params: {
    private_money_id: string,
    page?: number,
    per_page?: number,
    name?: string,
    code?: string
  }) {
    if (params.private_money_id === void 0) throw new Error('"private_money_id" is required');
    this.path = "/organizations";
    this.bodyParams = {
      private_money_id: params.private_money_id,
    };
    if (params.page !== void 0) this.bodyParams.page = params.page;
    if (params.per_page !== void 0) this.bodyParams.per_page = params.per_page;
    if (params.name !== void 0) this.bodyParams.name = params.name;
    if (params.code !== void 0) this.bodyParams.code = params.code;
  }
}

export { ListOrganizations };
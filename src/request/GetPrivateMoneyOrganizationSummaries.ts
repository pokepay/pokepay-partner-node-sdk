// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedPrivateMoneyOrganizationSummaries } from "../response/PaginatedPrivateMoneyOrganizationSummaries";

class GetPrivateMoneyOrganizationSummaries implements Request<PaginatedPrivateMoneyOrganizationSummaries> {
  public readonly __r: PaginatedPrivateMoneyOrganizationSummaries | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {
    from?: string,
    to?: string,
    page?: number,
    per_page?: number
  };
  public constructor(private_money_id: string, bodyParams?: {
    from?: string,
    to?: string,
    page?: number,
    per_page?: number
  }) {
    this.bodyParams = bodyParams ?? {};
    this.path = "/private-moneys" + "/" + private_money_id + "/organization-summaries";
  }
}

export { GetPrivateMoneyOrganizationSummaries };

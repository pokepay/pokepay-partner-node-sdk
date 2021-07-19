// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { PaginatedAccounts } from "../response/PaginatedAccounts";

class ListUserAccounts implements Request<PaginatedAccounts> {
  public readonly __r: PaginatedAccounts | undefined;
  public readonly method: Method = "GET";
  public readonly path: string;
  public readonly bodyParams: {};
  public constructor(user_id: string) {
    this.bodyParams = {};
    this.path = "/users" + "/" + user_id + "/accounts";
  }
}

export { ListUserAccounts };
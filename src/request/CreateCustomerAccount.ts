// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { AccountWithUser } from "../response/AccountWithUser";

class CreateCustomerAccount implements Request<AccountWithUser> {
  public readonly __r: AccountWithUser | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    private_money_id: string,
    user_name?: string,
    account_name?: string
  };
  public constructor(bodyParams: {
    private_money_id: string,
    user_name?: string,
    account_name?: string
  }) {
    this.bodyParams = bodyParams;
    this.path = "/accounts" + "/customers";
  }
}

export { CreateCustomerAccount };
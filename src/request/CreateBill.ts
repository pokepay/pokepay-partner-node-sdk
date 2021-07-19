// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { Bill } from "../response/Bill";

class CreateBill implements Request<Bill> {
  public readonly __r: Bill | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    amount?: number,
    private_money_id: string,
    shop_id: string,
    description?: string
  };
  public constructor(bodyParams: {
    amount?: number,
    private_money_id: string,
    shop_id: string,
    description?: string
  }) {
    this.bodyParams = bodyParams;
    this.path = "/bills";
  }
}

export { CreateBill };

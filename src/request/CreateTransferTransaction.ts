// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";

class CreateTransferTransaction implements Request<Transaction> {
  public readonly __r: Transaction | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    sender_id: string,
    receiver_id: string,
    private_money_id: string,
    amount: number,
    metadata?: string,
    description?: string,
    request_id?: string
  };
  public constructor(params: {
    sender_id: string,
    receiver_id: string,
    private_money_id: string,
    amount: number,
    metadata?: string,
    description?: string,
    request_id?: string
  }) {
    if (params.sender_id === void 0) throw new Error('"sender_id" is required');
    if (params.receiver_id === void 0) throw new Error('"receiver_id" is required');
    if (params.private_money_id === void 0) throw new Error('"private_money_id" is required');
    if (params.amount === void 0) throw new Error('"amount" is required');
    this.path = "/transactions" + "/transfer";
    this.bodyParams = {
      sender_id: params.sender_id,
      receiver_id: params.receiver_id,
      private_money_id: params.private_money_id,
      amount: params.amount,
    };
    if (params.metadata !== void 0) this.bodyParams.metadata = params.metadata;
    if (params.description !== void 0) this.bodyParams.description = params.description;
    if (params.request_id !== void 0) this.bodyParams.request_id = params.request_id;
  }
}

export { CreateTransferTransaction };

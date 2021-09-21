import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class CreateExchangeTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        user_id: string;
        sender_private_money_id: string;
        receiver_private_money_id: string;
        amount: number;
        description?: string;
    };
    constructor(params: {
        user_id: string;
        sender_private_money_id: string;
        receiver_private_money_id: string;
        amount: number;
        description?: string;
    });
}
export { CreateExchangeTransaction };

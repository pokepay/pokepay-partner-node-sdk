import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class CreateTransferTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        sender_id: string;
        receiver_id: string;
        private_money_id: string;
        amount: number;
        description?: string;
    };
    constructor(bodyParams: {
        sender_id: string;
        receiver_id: string;
        private_money_id: string;
        amount: number;
        description?: string;
    });
}
export { CreateTransferTransaction };

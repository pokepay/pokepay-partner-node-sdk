import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class CreateExchangeTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        user_id: string;
        sender_private_money_id: string;
        receiver_private_money_id: string;
        amount: number;
        description?: string;
        request_id?: string;
    };
    constructor(params: {
        user_id: string;
        sender_private_money_id: string;
        receiver_private_money_id: string;
        amount: number;
        description?: string;
        request_id?: string;
    });
}
export { CreateExchangeTransaction };

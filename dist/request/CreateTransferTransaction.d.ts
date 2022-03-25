import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class CreateTransferTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        sender_id: string;
        receiver_id: string;
        private_money_id: string;
        amount: number;
        metadata?: string;
        description?: string;
        request_id?: string;
    };
    constructor(params: {
        sender_id: string;
        receiver_id: string;
        private_money_id: string;
        amount: number;
        metadata?: string;
        description?: string;
        request_id?: string;
    });
}
export { CreateTransferTransaction };

import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class RefundTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        description?: string;
    };
    constructor(params: {
        transaction_id: string;
        description?: string;
    });
}
export { RefundTransaction };

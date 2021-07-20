import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class CreateTopupTransactionWithCheck implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        check_id: string;
        customer_id: string;
    };
    constructor(params: {
        check_id: string;
        customer_id: string;
    });
}
export { CreateTopupTransactionWithCheck };

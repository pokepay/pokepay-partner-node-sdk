import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class CreateTopupTransactionWithCheck implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
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

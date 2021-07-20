import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class GetTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        transaction_id: string;
    });
}
export { GetTransaction };

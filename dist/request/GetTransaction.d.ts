import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class GetTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        transaction_id: string;
    });
}
export { GetTransaction };

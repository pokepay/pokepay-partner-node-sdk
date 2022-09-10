import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class GetTransactionByRequestId implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        request_id: string;
    });
}
export { GetTransactionByRequestId };

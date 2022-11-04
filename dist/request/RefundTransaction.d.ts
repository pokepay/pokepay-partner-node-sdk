import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class RefundTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        description?: string;
        returning_point_expires_at?: string;
    };
    constructor(params: {
        transaction_id: string;
        description?: string;
        returning_point_expires_at?: string;
    });
}
export { RefundTransaction };

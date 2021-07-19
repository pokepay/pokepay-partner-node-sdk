import { Request, Method } from "./Request";
import { Transfer } from "../response/Transfer";
declare class RefundTransaction implements Request<Transfer> {
    readonly __r: Transfer | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        description?: string;
    };
    constructor(transaction_id: string, bodyParams?: {
        description?: string;
    });
}
export { RefundTransaction };

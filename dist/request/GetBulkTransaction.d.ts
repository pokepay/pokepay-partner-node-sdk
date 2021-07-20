import { Request, Method } from "./Request";
import { BulkTransaction } from "../response/BulkTransaction";
declare class GetBulkTransaction implements Request<BulkTransaction> {
    readonly __r: BulkTransaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        bulk_transaction_id: string;
    });
}
export { GetBulkTransaction };

import { Request, Method } from "./Request";
import { BulkTransaction } from "../response/BulkTransaction";
declare class BulkCreateTransaction implements Request<BulkTransaction> {
    readonly __r: BulkTransaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        name: string;
        description?: string;
        content: string;
        request_id: string;
        private_money_id?: string;
    };
    constructor(params: {
        name: string;
        description?: string;
        content: string;
        request_id: string;
        private_money_id?: string;
    });
}
export { BulkCreateTransaction };

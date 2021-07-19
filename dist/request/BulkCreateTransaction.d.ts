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
    };
    constructor(bodyParams: {
        name: string;
        description?: string;
        content: string;
        request_id: string;
    });
}
export { BulkCreateTransaction };

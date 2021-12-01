import { Request, Method } from "./Request";
import { ExternalTransaction } from "../response/ExternalTransaction";
declare class RefundExternalTransaction implements Request<ExternalTransaction> {
    readonly __r: ExternalTransaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        description?: string;
    };
    constructor(params: {
        event_id: string;
        description?: string;
    });
}
export { RefundExternalTransaction };

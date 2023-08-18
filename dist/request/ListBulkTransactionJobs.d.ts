import { Request, Method } from "./Request";
import { PaginatedBulkTransactionJob } from "../response/PaginatedBulkTransactionJob";
declare class ListBulkTransactionJobs implements Request<PaginatedBulkTransactionJob> {
    readonly __r: PaginatedBulkTransactionJob | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        page?: number;
        per_page?: number;
    };
    constructor(params: {
        bulk_transaction_id: string;
        page?: number;
        per_page?: number;
    });
}
export { ListBulkTransactionJobs };

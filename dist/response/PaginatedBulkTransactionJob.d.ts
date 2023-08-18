import { BulkTransactionJob } from "./BulkTransactionJob";
import { Pagination } from "./Pagination";
interface PaginatedBulkTransactionJob {
    readonly rows: BulkTransactionJob[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedBulkTransactionJob };

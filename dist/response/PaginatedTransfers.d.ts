import { Transfer } from "./Transfer";
import { Pagination } from "./Pagination";
interface PaginatedTransfers {
    readonly rows: Transfer[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedTransfers };

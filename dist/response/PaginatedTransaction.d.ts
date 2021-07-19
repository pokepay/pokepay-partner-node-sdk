import { Transaction } from "./Transaction";
import { Pagination } from "./Pagination";
interface PaginatedTransaction {
    readonly rows: Transaction[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedTransaction };

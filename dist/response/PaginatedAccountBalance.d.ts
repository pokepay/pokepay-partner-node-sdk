import { AccountBalance } from "./AccountBalance";
import { Pagination } from "./Pagination";
interface PaginatedAccountBalance {
    readonly rows: AccountBalance[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedAccountBalance };

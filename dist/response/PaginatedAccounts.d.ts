import { Account } from "./Account";
import { Pagination } from "./Pagination";
interface PaginatedAccounts {
    readonly rows: Account[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedAccounts };

import { AccountDetail } from "./AccountDetail";
import { Pagination } from "./Pagination";
interface PaginatedAccountDetails {
    readonly rows: AccountDetail[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedAccountDetails };

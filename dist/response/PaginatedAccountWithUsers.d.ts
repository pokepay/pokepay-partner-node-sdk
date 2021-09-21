import { AccountWithUser } from "./AccountWithUser";
import { Pagination } from "./Pagination";
interface PaginatedAccountWithUsers {
    readonly rows: AccountWithUser[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedAccountWithUsers };

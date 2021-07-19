import { PrivateMoney } from "./PrivateMoney";
import { Pagination } from "./Pagination";
interface PaginatedPrivateMoneys {
    readonly rows: PrivateMoney[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedPrivateMoneys };

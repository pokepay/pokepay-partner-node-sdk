import { PrivateMoneyOrganizationSummary } from "./PrivateMoneyOrganizationSummary";
import { Pagination } from "./Pagination";
interface PaginatedPrivateMoneyOrganizationSummaries {
    readonly rows: PrivateMoneyOrganizationSummary[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedPrivateMoneyOrganizationSummaries };

import { Campaign } from "./Campaign";
import { Pagination } from "./Pagination";
interface PaginatedCampaigns {
    readonly rows: Campaign[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedCampaigns };

import { OrganizationWorkerTaskWebhook } from "./OrganizationWorkerTaskWebhook";
import { Pagination } from "./Pagination";
interface PaginatedOrganizationWorkerTaskWebhook {
    readonly rows: OrganizationWorkerTaskWebhook[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedOrganizationWorkerTaskWebhook };

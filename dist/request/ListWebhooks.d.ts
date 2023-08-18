import { Request, Method } from "./Request";
import { PaginatedOrganizationWorkerTaskWebhook } from "../response/PaginatedOrganizationWorkerTaskWebhook";
declare class ListWebhooks implements Request<PaginatedOrganizationWorkerTaskWebhook> {
    readonly __r: PaginatedOrganizationWorkerTaskWebhook | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        page?: number;
        per_page?: number;
    };
    constructor(params?: {
        page?: number;
        per_page?: number;
    });
}
export { ListWebhooks };

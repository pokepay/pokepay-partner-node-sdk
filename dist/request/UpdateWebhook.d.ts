import { Request, Method } from "./Request";
import { OrganizationWorkerTaskWebhook } from "../response/OrganizationWorkerTaskWebhook";
declare class UpdateWebhook implements Request<OrganizationWorkerTaskWebhook> {
    readonly __r: OrganizationWorkerTaskWebhook | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        url?: string;
        is_active?: boolean;
        task?: string;
    };
    constructor(params: {
        webhook_id: string;
        url?: string;
        is_active?: boolean;
        task?: string;
    });
}
export { UpdateWebhook };

import { Request, Method } from "./Request";
import { OrganizationWorkerTaskWebhook } from "../response/OrganizationWorkerTaskWebhook";
declare class CreateWebhook implements Request<OrganizationWorkerTaskWebhook> {
    readonly __r: OrganizationWorkerTaskWebhook | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        task: string;
        url: string;
    };
    constructor(params: {
        task: string;
        url: string;
    });
}
export { CreateWebhook };

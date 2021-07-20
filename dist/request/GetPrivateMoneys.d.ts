import { Request, Method } from "./Request";
import { PaginatedPrivateMoneys } from "../response/PaginatedPrivateMoneys";
declare class GetPrivateMoneys implements Request<PaginatedPrivateMoneys> {
    readonly __r: PaginatedPrivateMoneys | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        organization_code?: string;
        page?: number;
        per_page?: number;
    };
    constructor(params?: {
        organization_code?: string;
        page?: number;
        per_page?: number;
    });
}
export { GetPrivateMoneys };

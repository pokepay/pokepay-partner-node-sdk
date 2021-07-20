import { Request, Method } from "./Request";
import { PaginatedPrivateMoneyOrganizationSummaries } from "../response/PaginatedPrivateMoneyOrganizationSummaries";
declare class GetPrivateMoneyOrganizationSummaries implements Request<PaginatedPrivateMoneyOrganizationSummaries> {
    readonly __r: PaginatedPrivateMoneyOrganizationSummaries | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
    };
    constructor(params: {
        private_money_id: string;
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
    });
}
export { GetPrivateMoneyOrganizationSummaries };

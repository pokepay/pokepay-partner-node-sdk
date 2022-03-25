import { Request, Method } from "./Request";
import { PaginatedCampaigns } from "../response/PaginatedCampaigns";
declare class ListCampaigns implements Request<PaginatedCampaigns> {
    readonly __r: PaginatedCampaigns | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        page?: number;
        per_page?: number;
    };
    constructor(params: {
        private_money_id: string;
        page?: number;
        per_page?: number;
    });
}
export { ListCampaigns };

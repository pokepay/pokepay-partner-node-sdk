import { Request, Method } from "./Request";
import { Campaign } from "../response/Campaign";
declare class GetCampaign implements Request<Campaign> {
    readonly __r: Campaign | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        campaign_id: string;
    });
}
export { GetCampaign };

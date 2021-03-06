import { Request, Method } from "./Request";
import { Campaign } from "../response/Campaign";
declare class UpdateCampaign implements Request<Campaign> {
    readonly __r: Campaign | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        name?: string;
        starts_at?: string;
        ends_at?: string;
        priority?: number;
        event?: string;
        description?: string;
        status?: string;
        point_expires_at?: string;
        point_expires_in_days?: number;
        is_exclusive?: boolean;
        subject?: string;
        amount_based_point_rules?: Object[];
        product_based_point_rules?: Object[];
        applicable_days_of_week?: number[];
        applicable_time_ranges?: Object[];
        applicable_shop_ids?: string[];
        minimum_number_for_combination_purchase?: number;
    };
    constructor(params: {
        campaign_id: string;
        name?: string;
        starts_at?: string;
        ends_at?: string;
        priority?: number;
        event?: string;
        description?: string;
        status?: string;
        point_expires_at?: string;
        point_expires_in_days?: number;
        is_exclusive?: boolean;
        subject?: string;
        amount_based_point_rules?: Object[];
        product_based_point_rules?: Object[];
        applicable_days_of_week?: number[];
        applicable_time_ranges?: Object[];
        applicable_shop_ids?: string[];
        minimum_number_for_combination_purchase?: number;
    });
}
export { UpdateCampaign };

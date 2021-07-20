import { Request, Method } from "./Request";
import { Check } from "../response/Check";
declare class CreateCheck implements Request<Check> {
    readonly __r: Check | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        money_amount?: number;
        point_amount?: number;
        account_id: string;
        description?: string;
        is_onetime?: boolean;
        usage_limit?: number;
        expires_at?: string;
        point_expires_at?: string;
        point_expires_in_days?: number;
        bear_point_account?: string;
    };
    constructor(params: {
        money_amount?: number;
        point_amount?: number;
        account_id: string;
        description?: string;
        is_onetime?: boolean;
        usage_limit?: number;
        expires_at?: string;
        point_expires_at?: string;
        point_expires_in_days?: number;
        bear_point_account?: string;
    });
}
export { CreateCheck };

import { Request, Method } from "./Request";
import { PaginatedBills } from "../response/PaginatedBills";
declare class ListBills implements Request<PaginatedBills> {
    readonly __r: PaginatedBills | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        page?: number;
        per_page?: number;
        bill_id?: string;
        private_money_id?: string;
        organization_code?: string;
        description?: string;
        created_from?: string;
        created_to?: string;
        shop_name?: string;
        shop_id?: string;
        lower_limit_amount?: number;
        upper_limit_amount?: number;
        is_disabled?: boolean;
    };
    constructor(params?: {
        page?: number;
        per_page?: number;
        bill_id?: string;
        private_money_id?: string;
        organization_code?: string;
        description?: string;
        created_from?: string;
        created_to?: string;
        shop_name?: string;
        shop_id?: string;
        lower_limit_amount?: number;
        upper_limit_amount?: number;
        is_disabled?: boolean;
    });
}
export { ListBills };

import { Request, Method } from "./Request";
import { PaginatedTransfers } from "../response/PaginatedTransfers";
declare class ListTransfers implements Request<PaginatedTransfers> {
    readonly __r: PaginatedTransfers | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
        shop_id?: string;
        shop_name?: string;
        customer_id?: string;
        customer_name?: string;
        transaction_id?: string;
        private_money_id?: string;
        is_modified?: boolean;
        transaction_types?: string[];
        transfer_types?: string[];
    };
    constructor(bodyParams?: {
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
        shop_id?: string;
        shop_name?: string;
        customer_id?: string;
        customer_name?: string;
        transaction_id?: string;
        private_money_id?: string;
        is_modified?: boolean;
        transaction_types?: string[];
        transfer_types?: string[];
    });
}
export { ListTransfers };

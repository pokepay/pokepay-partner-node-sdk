import { Request, Method } from "./Request";
import { PaginatedTransaction } from "../response/PaginatedTransaction";
declare class ListTransactions implements Request<PaginatedTransaction> {
    readonly __r: PaginatedTransaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
        shop_id?: string;
        customer_id?: string;
        customer_name?: string;
        terminal_id?: string;
        transaction_id?: string;
        organization_code?: string;
        private_money_id?: string;
        is_modified?: boolean;
        types?: string[];
    };
    constructor(params?: {
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
        shop_id?: string;
        customer_id?: string;
        customer_name?: string;
        terminal_id?: string;
        transaction_id?: string;
        organization_code?: string;
        private_money_id?: string;
        is_modified?: boolean;
        types?: string[];
    });
}
export { ListTransactions };

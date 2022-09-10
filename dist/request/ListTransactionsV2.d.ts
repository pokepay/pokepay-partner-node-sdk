import { Request, Method } from "./Request";
import { PaginatedTransactionV2 } from "../response/PaginatedTransactionV2";
declare class ListTransactionsV2 implements Request<PaginatedTransactionV2> {
    readonly __r: PaginatedTransactionV2 | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id?: string;
        organization_code?: string;
        shop_id?: string;
        terminal_id?: string;
        customer_id?: string;
        customer_name?: string;
        description?: string;
        transaction_id?: string;
        is_modified?: boolean;
        types?: string[];
        from?: string;
        to?: string;
        next_page_cursor_id?: string;
        prev_page_cursor_id?: string;
        per_page?: number;
    };
    constructor(params?: {
        private_money_id?: string;
        organization_code?: string;
        shop_id?: string;
        terminal_id?: string;
        customer_id?: string;
        customer_name?: string;
        description?: string;
        transaction_id?: string;
        is_modified?: boolean;
        types?: string[];
        from?: string;
        to?: string;
        next_page_cursor_id?: string;
        prev_page_cursor_id?: string;
        per_page?: number;
    });
}
export { ListTransactionsV2 };

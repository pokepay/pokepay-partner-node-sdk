import { Request, Method } from "./Request";
import { PaginatedTransaction } from "../response/PaginatedTransaction";
declare class ListCustomerTransactions implements Request<PaginatedTransaction> {
    readonly __r: PaginatedTransaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        sender_customer_id?: string;
        receiver_customer_id?: string;
        type?: string;
        is_modified?: boolean;
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
    };
    constructor(bodyParams: {
        private_money_id: string;
        sender_customer_id?: string;
        receiver_customer_id?: string;
        type?: string;
        is_modified?: boolean;
        from?: string;
        to?: string;
        page?: number;
        per_page?: number;
    });
}
export { ListCustomerTransactions };

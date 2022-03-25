import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class CreateTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        shop_id: string;
        customer_id: string;
        private_money_id: string;
        money_amount?: number;
        point_amount?: number;
        point_expires_at?: string;
        description?: string;
    };
    constructor(params: {
        shop_id: string;
        customer_id: string;
        private_money_id: string;
        money_amount?: number;
        point_amount?: number;
        point_expires_at?: string;
        description?: string;
    });
}
export { CreateTransaction };

import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class CreateTopupTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        shop_id: string;
        customer_id: string;
        private_money_id: string;
        bear_point_shop_id?: string;
        money_amount?: number;
        point_amount?: number;
        point_expires_at?: string;
        description?: string;
    };
    constructor(params: {
        shop_id: string;
        customer_id: string;
        private_money_id: string;
        bear_point_shop_id?: string;
        money_amount?: number;
        point_amount?: number;
        point_expires_at?: string;
        description?: string;
    });
}
export { CreateTopupTransaction };

import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class CreateTopupTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
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
        metadata?: string;
        request_id?: string;
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
        metadata?: string;
        request_id?: string;
    });
}
export { CreateTopupTransaction };

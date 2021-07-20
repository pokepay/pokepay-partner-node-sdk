import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class CreatePaymentTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        shop_id: string;
        customer_id: string;
        private_money_id: string;
        amount: number;
        description?: string;
    };
    constructor(params: {
        shop_id: string;
        customer_id: string;
        private_money_id: string;
        amount: number;
        description?: string;
    });
}
export { CreatePaymentTransaction };

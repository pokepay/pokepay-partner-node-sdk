import { Request, Method } from "./Request";
import { Bill } from "../response/Bill";
declare class CreateBill implements Request<Bill> {
    readonly __r: Bill | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        amount?: number;
        private_money_id: string;
        shop_id: string;
        description?: string;
    };
    constructor(params: {
        amount?: number;
        private_money_id: string;
        shop_id: string;
        description?: string;
    });
}
export { CreateBill };

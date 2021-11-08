import { Request, Method } from "./Request";
import { Transaction } from "../response/Transaction";
declare class CreateCpmTransaction implements Request<Transaction> {
    readonly __r: Transaction | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        cpm_token: string;
        shop_id: string;
        amount: number;
        description?: string;
        metadata?: string;
        products?: Object[];
        request_id?: string;
    };
    constructor(params: {
        cpm_token: string;
        shop_id: string;
        amount: number;
        description?: string;
        metadata?: string;
        products?: Object[];
        request_id?: string;
    });
}
export { CreateCpmTransaction };

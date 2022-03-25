import { Request, Method } from "./Request";
import { TransactionDetail } from "../response/TransactionDetail";
declare class CreateCpmTransaction implements Request<TransactionDetail> {
    readonly __r: TransactionDetail | undefined;
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

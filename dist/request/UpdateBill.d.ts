import { Request, Method } from "./Request";
import { Bill } from "../response/Bill";
declare class UpdateBill implements Request<Bill> {
    readonly __r: Bill | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        amount?: number;
        description?: string;
        is_disabled?: boolean;
    };
    constructor(params: {
        bill_id: string;
        amount?: number;
        description?: string;
        is_disabled?: boolean;
    });
}
export { UpdateBill };

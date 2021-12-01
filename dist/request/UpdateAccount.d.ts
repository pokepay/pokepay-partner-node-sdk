import { Request, Method } from "./Request";
import { AccountDetail } from "../response/AccountDetail";
declare class UpdateAccount implements Request<AccountDetail> {
    readonly __r: AccountDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        is_suspended?: boolean;
        status?: string;
        can_transfer_topup?: boolean;
    };
    constructor(params: {
        account_id: string;
        is_suspended?: boolean;
        status?: string;
        can_transfer_topup?: boolean;
    });
}
export { UpdateAccount };

import { Request, Method } from "./Request";
import { AccountDetail } from "../response/AccountDetail";
declare class UpdateAccount implements Request<AccountDetail> {
    readonly __r: AccountDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        is_suspended?: boolean;
    };
    constructor(account_id: string, bodyParams?: {
        is_suspended?: boolean;
    });
}
export { UpdateAccount };

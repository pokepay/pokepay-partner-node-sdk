import { Request, Method } from "./Request";
import { AccountDetail } from "../response/AccountDetail";
declare class GetAccount implements Request<AccountDetail> {
    readonly __r: AccountDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        account_id: string;
    });
}
export { GetAccount };

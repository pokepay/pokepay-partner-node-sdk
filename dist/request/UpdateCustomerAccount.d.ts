import { Request, Method } from "./Request";
import { AccountWithUser } from "../response/AccountWithUser";
declare class UpdateCustomerAccount implements Request<AccountWithUser> {
    readonly __r: AccountWithUser | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        status?: string;
        account_name?: string;
        external_id?: string;
    };
    constructor(params: {
        account_id: string;
        status?: string;
        account_name?: string;
        external_id?: string;
    });
}
export { UpdateCustomerAccount };

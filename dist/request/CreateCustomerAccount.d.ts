import { Request, Method } from "./Request";
import { AccountWithUser } from "../response/AccountWithUser";
declare class CreateCustomerAccount implements Request<AccountWithUser> {
    readonly __r: AccountWithUser | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        user_name?: string;
        account_name?: string;
    };
    constructor(bodyParams: {
        private_money_id: string;
        user_name?: string;
        account_name?: string;
    });
}
export { CreateCustomerAccount };

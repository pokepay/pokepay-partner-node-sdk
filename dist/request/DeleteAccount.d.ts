import { Request, Method } from "./Request";
import { AccountDeleted } from "../response/AccountDeleted";
declare class DeleteAccount implements Request<AccountDeleted> {
    readonly __r: AccountDeleted | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        cashback?: boolean;
    };
    constructor(params: {
        account_id: string;
        cashback?: boolean;
    });
}
export { DeleteAccount };

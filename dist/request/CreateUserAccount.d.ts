import { Request, Method } from "./Request";
import { AccountDetail } from "../response/AccountDetail";
declare class CreateUserAccount implements Request<AccountDetail> {
    readonly __r: AccountDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        name?: string;
        external_id?: string;
        metadata?: string;
    };
    constructor(params: {
        user_id: string;
        private_money_id: string;
        name?: string;
        external_id?: string;
        metadata?: string;
    });
}
export { CreateUserAccount };

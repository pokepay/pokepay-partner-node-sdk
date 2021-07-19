import { Request, Method } from "./Request";
import { PaginatedAccounts } from "../response/PaginatedAccounts";
declare class ListUserAccounts implements Request<PaginatedAccounts> {
    readonly __r: PaginatedAccounts | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(user_id: string);
}
export { ListUserAccounts };

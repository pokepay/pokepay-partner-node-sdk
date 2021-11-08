import { Request, Method } from "./Request";
import { PaginatedAccountDetails } from "../response/PaginatedAccountDetails";
declare class ListUserAccounts implements Request<PaginatedAccountDetails> {
    readonly __r: PaginatedAccountDetails | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        page?: number;
        per_page?: number;
    };
    constructor(params: {
        user_id: string;
        page?: number;
        per_page?: number;
    });
}
export { ListUserAccounts };

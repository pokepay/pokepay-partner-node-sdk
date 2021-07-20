import { Request, Method } from "./Request";
import { PaginatedAccountBalance } from "../response/PaginatedAccountBalance";
declare class ListAccountBalances implements Request<PaginatedAccountBalance> {
    readonly __r: PaginatedAccountBalance | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        page?: number;
        per_page?: number;
        expires_at_from?: string;
        expires_at_to?: string;
        direction?: string;
    };
    constructor(params: {
        account_id: string;
        page?: number;
        per_page?: number;
        expires_at_from?: string;
        expires_at_to?: string;
        direction?: string;
    });
}
export { ListAccountBalances };

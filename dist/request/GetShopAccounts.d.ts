import { Request, Method } from "./Request";
import { PaginatedAccountWithUsers } from "../response/PaginatedAccountWithUsers";
declare class GetShopAccounts implements Request<PaginatedAccountWithUsers> {
    readonly __r: PaginatedAccountWithUsers | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        page?: number;
        per_page?: number;
        created_at_from?: string;
        created_at_to?: string;
        is_suspended?: boolean;
    };
    constructor(params: {
        private_money_id: string;
        page?: number;
        per_page?: number;
        created_at_from?: string;
        created_at_to?: string;
        is_suspended?: boolean;
    });
}
export { GetShopAccounts };

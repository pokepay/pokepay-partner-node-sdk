import { Request, Method } from "./Request";
import { PaginatedShops } from "../response/PaginatedShops";
declare class ListShops implements Request<PaginatedShops> {
    readonly __r: PaginatedShops | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        organization_code?: string;
        private_money_id?: string;
        name?: string;
        postal_code?: string;
        address?: string;
        tel?: string;
        email?: string;
        external_id?: string;
        page?: number;
        per_page?: number;
    };
    constructor(params?: {
        organization_code?: string;
        private_money_id?: string;
        name?: string;
        postal_code?: string;
        address?: string;
        tel?: string;
        email?: string;
        external_id?: string;
        page?: number;
        per_page?: number;
    });
}
export { ListShops };

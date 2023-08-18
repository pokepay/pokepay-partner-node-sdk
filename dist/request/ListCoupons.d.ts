import { Request, Method } from "./Request";
import { PaginatedCoupons } from "../response/PaginatedCoupons";
declare class ListCoupons implements Request<PaginatedCoupons> {
    readonly __r: PaginatedCoupons | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        coupon_id?: string;
        coupon_name?: string;
        issued_shop_name?: string;
        available_shop_name?: string;
        available_from?: string;
        available_to?: string;
        page?: number;
        per_page?: number;
    };
    constructor(params: {
        private_money_id: string;
        coupon_id?: string;
        coupon_name?: string;
        issued_shop_name?: string;
        available_shop_name?: string;
        available_from?: string;
        available_to?: string;
        page?: number;
        per_page?: number;
    });
}
export { ListCoupons };

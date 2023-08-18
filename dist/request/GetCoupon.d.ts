import { Request, Method } from "./Request";
import { CouponDetail } from "../response/CouponDetail";
declare class GetCoupon implements Request<CouponDetail> {
    readonly __r: CouponDetail | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        coupon_id: string;
    });
}
export { GetCoupon };

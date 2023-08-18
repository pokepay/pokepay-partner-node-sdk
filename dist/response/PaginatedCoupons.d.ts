import { Coupon } from "./Coupon";
import { Pagination } from "./Pagination";
interface PaginatedCoupons {
    readonly rows: Coupon[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedCoupons };

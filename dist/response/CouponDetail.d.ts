import { User } from "./User";
import { PrivateMoney } from "./PrivateMoney";
interface CouponDetail {
    readonly id: string;
    readonly name: string;
    readonly issued_shop: User;
    readonly description: string;
    readonly discount_amount?: number;
    readonly discount_percentage?: number;
    readonly discount_upper_limit?: number;
    readonly starts_at: string;
    readonly ends_at: string;
    readonly display_starts_at: string;
    readonly display_ends_at: string;
    readonly usage_limit?: number;
    readonly min_amount?: number;
    readonly is_shop_specified: boolean;
    readonly is_hidden: boolean;
    readonly is_public: boolean;
    readonly code?: string;
    readonly is_disabled: boolean;
    readonly token: string;
    readonly coupon_image?: string;
    readonly available_shops: User[];
    readonly private_money: PrivateMoney;
}
export { CouponDetail };

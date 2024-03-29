import { User } from "./User";
import { PrivateMoney } from "./PrivateMoney";
interface Campaign {
    readonly id: string;
    readonly name: string;
    readonly applicable_shops?: User[];
    readonly is_exclusive: boolean;
    readonly starts_at: string;
    readonly ends_at: string;
    readonly point_expires_at?: string;
    readonly point_expires_in_days?: number;
    readonly priority: number;
    readonly description: string;
    readonly bear_point_shop: User;
    readonly private_money: PrivateMoney;
    readonly dest_private_money: PrivateMoney;
    readonly max_total_point_amount?: number;
    readonly point_calculation_rule: string;
    readonly point_calculation_rule_object: string;
    readonly status: string;
}
export { Campaign };

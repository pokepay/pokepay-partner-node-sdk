import { User } from "./User";
import { PrivateMoney } from "./PrivateMoney";
interface Check {
    readonly id: string;
    readonly created_at: string;
    readonly amount: number;
    readonly money_amount: number;
    readonly point_amount: number;
    readonly description: string;
    readonly user: User;
    readonly is_onetime: boolean;
    readonly is_disabled: boolean;
    readonly expires_at: string;
    readonly private_money: PrivateMoney;
    readonly usage_limit?: number;
    readonly usage_count?: number;
    readonly point_expires_at?: string;
    readonly point_expires_in_days?: number;
    readonly token: string;
}
export { Check };

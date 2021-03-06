import { User } from "./User";
import { PrivateMoney } from "./PrivateMoney";
interface Check {
    readonly id: string;
    readonly amount: number;
    readonly money_amount: number;
    readonly point_amount: number;
    readonly description: string;
    readonly user: User;
    readonly is_onetime: boolean;
    readonly is_disabled: boolean;
    readonly expires_at: string;
    readonly private_money: PrivateMoney;
    readonly usage_limit: number;
    readonly usage_count: number;
    readonly token: string;
}
export { Check };

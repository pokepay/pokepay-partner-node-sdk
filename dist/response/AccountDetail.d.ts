import { PrivateMoney } from "./PrivateMoney";
import { User } from "./User";
interface AccountDetail {
    readonly id: string;
    readonly name: string;
    readonly is_suspended: boolean;
    readonly status: string;
    readonly balance: number;
    readonly money_balance: number;
    readonly point_balance: number;
    readonly private_money: PrivateMoney;
    readonly user: User;
    readonly external_id?: string;
}
export { AccountDetail };

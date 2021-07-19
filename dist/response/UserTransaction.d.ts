import { User } from "./User";
import { Account } from "./Account";
interface UserTransaction {
    readonly id: string;
    readonly user: User;
    readonly balance: number;
    readonly amount: number;
    readonly money_amount: number;
    readonly point_amount: number;
    readonly account: Account;
    readonly description: string;
    readonly done_at: string;
    readonly type: string;
    readonly is_modified: boolean;
}
export { UserTransaction };

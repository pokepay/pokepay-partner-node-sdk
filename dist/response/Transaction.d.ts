import { User } from "./User";
import { Account } from "./Account";
interface Transaction {
    readonly id: string;
    readonly type: string;
    readonly is_modified: boolean;
    readonly sender: User;
    readonly sender_account: Account;
    readonly receiver: User;
    readonly receiver_account: Account;
    readonly amount: number;
    readonly money_amount: number;
    readonly point_amount: number;
    readonly done_at: string;
    readonly description: string;
}
export { Transaction };
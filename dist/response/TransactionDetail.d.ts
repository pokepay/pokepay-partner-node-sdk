import { User } from "./User";
import { Account } from "./Account";
import { Transfer } from "./Transfer";
interface TransactionDetail {
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
    readonly raw_point_amount: number;
    readonly campaign_point_amount: number;
    readonly done_at: string;
    readonly description: string;
    readonly transfers: Transfer[];
}
export { TransactionDetail };

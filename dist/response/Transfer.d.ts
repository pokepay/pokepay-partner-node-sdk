import { AccountWithoutPrivateMoneyDetail } from "./AccountWithoutPrivateMoneyDetail";
interface Transfer {
    readonly id: string;
    readonly sender_account: AccountWithoutPrivateMoneyDetail;
    readonly receiver_account: AccountWithoutPrivateMoneyDetail;
    readonly amount: number;
    readonly money_amount: number;
    readonly point_amount: number;
    readonly done_at: string;
    readonly type: string;
    readonly description: string;
    readonly transaction_id: string;
}
export { Transfer };

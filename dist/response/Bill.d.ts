import { AccountWithUser } from "./AccountWithUser";
interface Bill {
    readonly id: string;
    readonly amount?: number;
    readonly max_amount?: number;
    readonly min_amount?: number;
    readonly description: string;
    readonly account: AccountWithUser;
    readonly is_disabled: boolean;
    readonly token: string;
}
export { Bill };
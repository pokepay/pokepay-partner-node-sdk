import { AccountWithUser } from "./AccountWithUser";
import { CashtrayAttempt } from "./CashtrayAttempt";
import { Transaction } from "./Transaction";
interface CashtrayWithResult {
    readonly id: string;
    readonly amount: number;
    readonly description: string;
    readonly account: AccountWithUser;
    readonly expires_at: string;
    readonly canceled_at?: string;
    readonly token: string;
    readonly attempt?: CashtrayAttempt;
    readonly transaction?: Transaction;
}
export { CashtrayWithResult };

import { AccountDetail } from "./AccountDetail";
import { Transaction } from "./Transaction";
import { ExternalTransaction } from "./ExternalTransaction";
interface CpmToken {
    readonly cpm_token: string;
    readonly account: AccountDetail;
    readonly transaction?: Transaction;
    readonly event?: ExternalTransaction;
    readonly scopes: string[];
    readonly expires_at: string;
    readonly metadata: string;
}
export { CpmToken };

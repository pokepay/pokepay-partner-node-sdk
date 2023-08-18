import { BulkTransaction } from "./BulkTransaction";
interface BulkTransactionJob {
    readonly id: number;
    readonly bulk_transaction: BulkTransaction;
    readonly type: string;
    readonly sender_account_id: string;
    readonly receiver_account_id: string;
    readonly money_amount: number;
    readonly point_amount: number;
    readonly description: string;
    readonly bear_point_account_id: string;
    readonly point_expires_at?: string;
    readonly status: string;
    readonly error?: string;
    readonly lineno?: number;
    readonly transaction_id?: string;
    readonly created_at: string;
    readonly updated_at: string;
}
export { BulkTransactionJob };

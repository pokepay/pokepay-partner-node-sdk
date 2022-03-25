import { Transaction } from "./Transaction";
interface PaginatedTransactionV2 {
    readonly rows: Transaction[];
    readonly per_page: number;
    readonly count: number;
    readonly next_page_cursor_id?: string;
    readonly prev_page_cursor_id?: string;
}
export { PaginatedTransactionV2 };

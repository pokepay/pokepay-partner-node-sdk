import { Transfer } from "./Transfer";
interface PaginatedTransfersV2 {
    readonly rows: Transfer[];
    readonly per_page: number;
    readonly count: number;
    readonly next_page_cursor_id?: string;
    readonly prev_page_cursor_id?: string;
}
export { PaginatedTransfersV2 };

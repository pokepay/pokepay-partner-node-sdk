import { ShopWithMetadata } from "./ShopWithMetadata";
import { Pagination } from "./Pagination";
interface PaginatedShops {
    readonly rows: ShopWithMetadata[];
    readonly count: number;
    readonly pagination: Pagination;
}
export { PaginatedShops };

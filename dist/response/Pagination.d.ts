interface Pagination {
    readonly current: number;
    readonly per_page: number;
    readonly max_page: number;
    readonly has_prev: boolean;
    readonly has_next: boolean;
}
export { Pagination };

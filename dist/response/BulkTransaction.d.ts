interface BulkTransaction {
    readonly id: string;
    readonly request_id: string;
    readonly name: string;
    readonly description: string;
    readonly status: string;
    readonly error?: string;
    readonly error_lineno?: number;
    readonly submitted_at: string;
    readonly updated_at: string;
}
export { BulkTransaction };

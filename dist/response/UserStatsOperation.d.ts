interface UserStatsOperation {
    readonly id: string;
    readonly from: string;
    readonly to: string;
    readonly status: string;
    readonly error_reason?: string;
    readonly done_at?: string;
    readonly file_url?: string;
    readonly requested_at: string;
}
export { UserStatsOperation };

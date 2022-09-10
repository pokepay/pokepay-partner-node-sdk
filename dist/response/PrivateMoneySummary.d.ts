interface PrivateMoneySummary {
    readonly topup_amount: number;
    readonly refunded_topup_amount: number;
    readonly payment_amount: number;
    readonly refunded_payment_amount: number;
    readonly added_point_amount: number;
    readonly refunded_added_point_amount: number;
    readonly exchange_inflow_amount: number;
    readonly exchange_outflow_amount: number;
    readonly transaction_count: number;
}
export { PrivateMoneySummary };

import { Organization } from "./Organization";
interface PrivateMoney {
    readonly id: string;
    readonly name: string;
    readonly unit: string;
    readonly is_exclusive: boolean;
    readonly description: string;
    readonly oneline_message: string;
    readonly organization: Organization;
    readonly max_balance: number;
    readonly transfer_limit: number;
    readonly type: string;
    readonly expiration_type: string;
    readonly enable_topup_by_member?: boolean;
}
export { PrivateMoney };

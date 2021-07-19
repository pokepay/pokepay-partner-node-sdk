import { OrganizationSummary } from "./OrganizationSummary";
interface PrivateMoneyOrganizationSummary {
    readonly organization_code: string;
    readonly topup: OrganizationSummary;
    readonly payment: OrganizationSummary;
}
export { PrivateMoneyOrganizationSummary };

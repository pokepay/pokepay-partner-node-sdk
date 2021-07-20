import { Request, Method } from "./Request";
import { Organization } from "../response/Organization";
declare class CreateOrganization implements Request<Organization> {
    readonly __r: Organization | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        code: string;
        name: string;
        private_money_ids: string[];
        issuer_admin_user_email: string;
        member_admin_user_email: string;
        bank_name?: string;
        bank_code?: string;
        bank_branch_name?: string;
        bank_branch_code?: string;
        bank_account_type?: string;
        bank_account?: string;
        bank_account_holder_name?: string;
        contact_name?: string;
    };
    constructor(params: {
        code: string;
        name: string;
        private_money_ids: string[];
        issuer_admin_user_email: string;
        member_admin_user_email: string;
        bank_name?: string;
        bank_code?: string;
        bank_branch_name?: string;
        bank_branch_code?: string;
        bank_account_type?: string;
        bank_account?: string;
        bank_account_holder_name?: string;
        contact_name?: string;
    });
}
export { CreateOrganization };

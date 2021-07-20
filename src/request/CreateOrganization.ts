// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { Organization } from "../response/Organization";

class CreateOrganization implements Request<Organization> {
  public readonly __r: Organization | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    code: string,
    name: string,
    private_money_ids: string[],
    issuer_admin_user_email: string,
    member_admin_user_email: string,
    bank_name?: string,
    bank_code?: string,
    bank_branch_name?: string,
    bank_branch_code?: string,
    bank_account_type?: string,
    bank_account?: string,
    bank_account_holder_name?: string,
    contact_name?: string
  };
  public constructor(params: {
    code: string,
    name: string,
    private_money_ids: string[],
    issuer_admin_user_email: string,
    member_admin_user_email: string,
    bank_name?: string,
    bank_code?: string,
    bank_branch_name?: string,
    bank_branch_code?: string,
    bank_account_type?: string,
    bank_account?: string,
    bank_account_holder_name?: string,
    contact_name?: string
  }) {
    if (params.code === void 0) throw new Error('"code" is required');
    if (params.name === void 0) throw new Error('"name" is required');
    if (params.private_money_ids === void 0) throw new Error('"private_money_ids" is required');
    if (params.issuer_admin_user_email === void 0) throw new Error('"issuer_admin_user_email" is required');
    if (params.member_admin_user_email === void 0) throw new Error('"member_admin_user_email" is required');
    this.path = "/organizations";
    this.bodyParams = {
      code: params.code,
      name: params.name,
      private_money_ids: params.private_money_ids,
      issuer_admin_user_email: params.issuer_admin_user_email,
      member_admin_user_email: params.member_admin_user_email,
    };
    if (params.bank_name !== void 0) this.bodyParams.bank_name = params.bank_name;
    if (params.bank_code !== void 0) this.bodyParams.bank_code = params.bank_code;
    if (params.bank_branch_name !== void 0) this.bodyParams.bank_branch_name = params.bank_branch_name;
    if (params.bank_branch_code !== void 0) this.bodyParams.bank_branch_code = params.bank_branch_code;
    if (params.bank_account_type !== void 0) this.bodyParams.bank_account_type = params.bank_account_type;
    if (params.bank_account !== void 0) this.bodyParams.bank_account = params.bank_account;
    if (params.bank_account_holder_name !== void 0) this.bodyParams.bank_account_holder_name = params.bank_account_holder_name;
    if (params.contact_name !== void 0) this.bodyParams.contact_name = params.contact_name;
  }
}

export { CreateOrganization };

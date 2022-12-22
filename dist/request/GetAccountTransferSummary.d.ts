import { Request, Method } from "./Request";
import { AccountTransferSummary } from "../response/AccountTransferSummary";
declare class GetAccountTransferSummary implements Request<AccountTransferSummary> {
    readonly __r: AccountTransferSummary | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        from?: string;
        to?: string;
        transfer_types?: string[];
    };
    constructor(params: {
        account_id: string;
        from?: string;
        to?: string;
        transfer_types?: string[];
    });
}
export { GetAccountTransferSummary };

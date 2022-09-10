import { Request, Method } from "./Request";
import { PrivateMoneySummary } from "../response/PrivateMoneySummary";
declare class GetPrivateMoneySummary implements Request<PrivateMoneySummary> {
    readonly __r: PrivateMoneySummary | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        from?: string;
        to?: string;
    };
    constructor(params: {
        private_money_id: string;
        from?: string;
        to?: string;
    });
}
export { GetPrivateMoneySummary };

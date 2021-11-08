import { Request, Method } from "./Request";
import { CpmToken } from "../response/CpmToken";
declare class GetCpmToken implements Request<CpmToken> {
    readonly __r: CpmToken | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        cpm_token: string;
    });
}
export { GetCpmToken };

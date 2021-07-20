import { Request, Method } from "./Request";
import { CashtrayWithResult } from "../response/CashtrayWithResult";
declare class GetCashtray implements Request<CashtrayWithResult> {
    readonly __r: CashtrayWithResult | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        cashtray_id: string;
    });
}
export { GetCashtray };

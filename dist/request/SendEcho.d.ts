import { Echo } from "../response/Response";
import { Request, Method } from "./Request";
declare class SendEcho implements Request<Echo> {
    readonly __r: Echo | undefined;
    readonly path: string;
    readonly method: Method;
    readonly bodyParams: Object;
    constructor(b: {
        message: string;
    });
}
export { SendEcho };

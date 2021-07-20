import { Request, Method } from "./Request";
import { Echo } from "../response/Echo";
declare class SendEcho implements Request<Echo> {
    readonly __r: Echo | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        message: string;
    };
    constructor(params: {
        message: string;
    });
}
export { SendEcho };

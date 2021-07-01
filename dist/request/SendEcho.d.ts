import { Echo } from "../response/Response";
import { Request } from "./Request";
import type { Method } from "axios";
declare class SendEcho implements Request<Echo> {
    readonly __r: Echo | undefined;
    readonly path: string;
    readonly method: Method;
    readonly bodyParams: Object;
    constructor({ message }: {
        message: string;
    });
}
export { SendEcho };

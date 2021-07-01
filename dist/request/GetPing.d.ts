import { Pong } from "../response/Response";
import { Request, Method } from "./Request";
declare class GetPing implements Request<Pong> {
    readonly __r: Pong | undefined;
    readonly path: string;
    readonly method: Method;
    readonly bodyParams: Object;
    constructor();
}
export { GetPing };

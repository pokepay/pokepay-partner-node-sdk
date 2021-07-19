import { Request, Method } from "./Request";
import { Pong } from "../response/Pong";
declare class GetPing implements Request<Pong> {
    readonly __r: Pong | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor();
}
export { GetPing };

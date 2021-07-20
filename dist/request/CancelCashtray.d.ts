import { Request, Method } from "./Request";
import { Cashtray } from "../response/Cashtray";
declare class CancelCashtray implements Request<Cashtray> {
    readonly __r: Cashtray | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(params: {
        cashtray_id: string;
    });
}
export { CancelCashtray };

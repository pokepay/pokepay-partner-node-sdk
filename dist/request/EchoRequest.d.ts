import { EchoResponse } from "../response/Response";
import { Request } from "./Request";
import type { Method } from "axios";
declare class EchoRequest implements Request<EchoResponse> {
    readonly __res: EchoResponse | undefined;
    readonly path: string;
    readonly method: Method;
    readonly bodyParams: Object;
    constructor({ message }: {
        message: string;
    });
}
export { EchoRequest };

import { Request, Method } from "./Request";
import { Cashtray } from "../response/Cashtray";
declare class UpdateCashtray implements Request<Cashtray> {
    readonly __r: Cashtray | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        amount?: number;
        description?: string;
        expires_in?: number;
    };
    constructor(cashtray_id: string, bodyParams: {
        amount?: number;
        description?: string;
        expires_in?: number;
    });
}
export { UpdateCashtray };

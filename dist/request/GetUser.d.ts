import { Request, Method } from "./Request";
import { AdminUserWithShopsAndPrivateMoneys } from "../response/AdminUserWithShopsAndPrivateMoneys";
declare class GetUser implements Request<AdminUserWithShopsAndPrivateMoneys> {
    readonly __r: AdminUserWithShopsAndPrivateMoneys | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor();
}
export { GetUser };

import { Request, Method } from "./Request";
import { UserStatsOperation } from "../response/UserStatsOperation";
declare class RequestUserStats implements Request<UserStatsOperation> {
    readonly __r: UserStatsOperation | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        from: string;
        to: string;
    };
    constructor(params: {
        from: string;
        to: string;
    });
}
export { RequestUserStats };

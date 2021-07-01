import type { Method } from "axios";
interface Request<R> {
    readonly __r: R | undefined;
    readonly path: string;
    readonly method: Method;
    readonly bodyParams: Object;
}
export { Request };
export * from "./SendEcho";

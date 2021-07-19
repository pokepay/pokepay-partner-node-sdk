import { Request, Method } from "./Request";
import { Cashtray } from "../response/Cashtray";
declare class CreateCashtray implements Request<Cashtray> {
    readonly __r: Cashtray | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        private_money_id: string;
        shop_id: string;
        amount: number;
        description?: string;
        expires_in?: number;
    };
    constructor(bodyParams: {
        private_money_id: string;
        shop_id: string;
        amount: number;
        description?: string;
        expires_in?: number;
    });
}
export { CreateCashtray };

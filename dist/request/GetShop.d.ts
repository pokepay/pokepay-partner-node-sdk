import { Request, Method } from "./Request";
import { ShopWithAccounts } from "../response/ShopWithAccounts";
declare class GetShop implements Request<ShopWithAccounts> {
    readonly __r: ShopWithAccounts | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {};
    constructor(shop_id: string);
}
export { GetShop };

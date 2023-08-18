import { Request, Method } from "./Request";
import { ShopWithAccounts } from "../response/ShopWithAccounts";
declare class UpdateShop implements Request<ShopWithAccounts> {
    readonly __r: ShopWithAccounts | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        name?: string;
        postal_code?: string;
        address?: string;
        tel?: string;
        email?: string;
        external_id?: string;
        private_money_ids?: string[];
        can_topup_private_money_ids?: string[];
        status?: string;
    };
    constructor(params: {
        shop_id: string;
        name?: string;
        postal_code?: string;
        address?: string;
        tel?: string;
        email?: string;
        external_id?: string;
        private_money_ids?: string[];
        can_topup_private_money_ids?: string[];
        status?: string;
    });
}
export { UpdateShop };

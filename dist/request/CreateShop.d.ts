import { Request, Method } from "./Request";
import { User } from "../response/User";
declare class CreateShop implements Request<User> {
    readonly __r: User | undefined;
    readonly method: Method;
    readonly path: string;
    readonly bodyParams: {
        shop_name: string;
        shop_postal_code?: string;
        shop_address?: string;
        shop_tel?: string;
        shop_email?: string;
        shop_external_id?: string;
        organization_code?: string;
    };
    constructor(bodyParams: {
        shop_name: string;
        shop_postal_code?: string;
        shop_address?: string;
        shop_tel?: string;
        shop_email?: string;
        shop_external_id?: string;
        organization_code?: string;
    });
}
export { CreateShop };

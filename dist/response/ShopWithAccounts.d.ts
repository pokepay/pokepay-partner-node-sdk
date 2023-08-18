import { ShopAccount } from "./ShopAccount";
interface ShopWithAccounts {
    readonly id: string;
    readonly name: string;
    readonly organization_code: string;
    readonly status: string;
    readonly postal_code?: string;
    readonly address?: string;
    readonly tel?: string;
    readonly email?: string;
    readonly external_id?: string;
    readonly accounts: ShopAccount[];
}
export { ShopWithAccounts };

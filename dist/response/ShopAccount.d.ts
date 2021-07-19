import { PrivateMoney } from "./PrivateMoney";
interface ShopAccount {
    readonly id: string;
    readonly name: string;
    readonly is_suspended: boolean;
    readonly can_transfer_topup: boolean;
    readonly private_money: PrivateMoney;
}
export { ShopAccount };

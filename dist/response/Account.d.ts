import { PrivateMoney } from "./PrivateMoney";
interface Account {
    readonly id: string;
    readonly name: string;
    readonly is_suspended: boolean;
    readonly private_money: PrivateMoney;
}
export { Account };

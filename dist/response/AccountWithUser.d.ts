import { PrivateMoney } from "./PrivateMoney";
import { User } from "./User";
interface AccountWithUser {
    readonly id: string;
    readonly name: string;
    readonly is_suspended: boolean;
    readonly private_money: PrivateMoney;
    readonly user: User;
}
export { AccountWithUser };
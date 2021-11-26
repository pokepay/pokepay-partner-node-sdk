import { AccountStatus } from "./AccountStatus";
import { PrivateMoney } from "./PrivateMoney";
import { User } from "./User";
interface AccountWithUser {
    readonly id: string;
    readonly name: string;
    readonly is_suspended: boolean;
    readonly status: AccountStatus;
    readonly private_money: PrivateMoney;
    readonly user: User;
}
export { AccountWithUser };

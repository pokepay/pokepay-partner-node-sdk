import { AccountStatus } from "./AccountStatus";
import { User } from "./User";
interface AccountWithoutPrivateMoneyDetail {
    readonly id: string;
    readonly name: string;
    readonly is_suspended: boolean;
    readonly status: AccountStatus;
    readonly private_money_id: string;
    readonly user: User;
}
export { AccountWithoutPrivateMoneyDetail };

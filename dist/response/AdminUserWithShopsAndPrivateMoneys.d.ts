import { Organization } from "./Organization";
import { User } from "./User";
import { PrivateMoney } from "./PrivateMoney";
interface AdminUserWithShopsAndPrivateMoneys {
    readonly id: string;
    readonly role: string;
    readonly email: string;
    readonly name: string;
    readonly is_active: boolean;
    readonly organization: Organization;
    readonly shops: User[];
    readonly private_moneys: PrivateMoney[];
}
export { AdminUserWithShopsAndPrivateMoneys };

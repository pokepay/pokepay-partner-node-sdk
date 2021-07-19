import { AccountWithUser } from "./AccountWithUser";
interface Cashtray {
    readonly id: string;
    readonly amount: number;
    readonly description: string;
    readonly account: AccountWithUser;
    readonly expires_at: string;
    readonly canceled_at?: string;
    readonly token: string;
}
export { Cashtray };

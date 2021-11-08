import { AccountWithUser } from "./AccountWithUser";
interface CashtrayAttempt {
    readonly account?: AccountWithUser;
    readonly status_code: number;
    readonly error_type: string;
    readonly error_message: string;
    readonly created_at: string;
}
export { CashtrayAttempt };

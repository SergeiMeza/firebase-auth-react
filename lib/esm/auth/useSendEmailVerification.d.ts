import { FirebaseError } from 'firebase/app';
import { ActionCodeSettings, User } from 'firebase/auth';
export default function useSendEmailVerification(): readonly [
    (user: User, actionCodeSettings?: ActionCodeSettings | null | undefined) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

import { FirebaseError } from 'firebase/app';
import { ActionCodeSettings, User } from 'firebase/auth';
export default function useSendEmailVerification(): readonly [
    (user: User, actionCodeSettings: ActionCodeSettings) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

import { FirebaseError } from 'firebase/app';
import { User, ActionCodeSettings } from 'firebase/auth';
export default function useVerifyBeforeUpdateEmail(): readonly [
    (user: User, newEmail: string, actionCodeSettings?: ActionCodeSettings | null | undefined) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

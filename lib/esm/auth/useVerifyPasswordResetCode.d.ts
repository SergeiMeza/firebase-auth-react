import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
export default function useVerifyPasswordResetCode(auth: Auth): readonly [
    (code: string) => Promise<void>,
    string | undefined,
    boolean,
    FirebaseError | undefined
];

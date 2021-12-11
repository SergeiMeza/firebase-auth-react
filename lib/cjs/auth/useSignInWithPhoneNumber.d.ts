import { FirebaseError } from 'firebase/app';
import { Auth, ApplicationVerifier, ConfirmationResult } from 'firebase/auth';
export default function useSignInWithPhoneNumber(auth: Auth): readonly [
    (phoneNumber: string, appVerifier: ApplicationVerifier) => Promise<void>,
    ConfirmationResult | undefined,
    boolean,
    FirebaseError | undefined
];

import { FirebaseError } from 'firebase/app';
import { ApplicationVerifier, ConfirmationResult, User } from 'firebase/auth';
export default function useReauthenticateWithPhoneNumber(): readonly [
    (user: User, phoneNumber: string, appVerifier: ApplicationVerifier) => Promise<void>,
    ConfirmationResult | undefined,
    boolean,
    FirebaseError | undefined
];

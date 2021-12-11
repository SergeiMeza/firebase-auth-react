import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential, AuthProvider } from 'firebase/auth';
export default function useSignInWithPopup(auth: Auth): readonly [
    (provider: AuthProvider) => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];

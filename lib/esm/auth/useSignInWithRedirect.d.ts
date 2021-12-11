import { FirebaseError } from 'firebase/app';
import { Auth, AuthProvider } from 'firebase/auth';
export default function useSignInWithRedirect(auth: Auth): readonly [
    (provider: AuthProvider) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

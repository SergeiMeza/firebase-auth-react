import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential, AuthCredential } from 'firebase/auth';
export default function useSignInWithCredential(auth: Auth): readonly [
    (credential: AuthCredential) => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];

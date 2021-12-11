import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';
export default function useSignInWithEmailLink(auth: Auth): readonly [
    (email: string, emailLink: string | undefined) => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];

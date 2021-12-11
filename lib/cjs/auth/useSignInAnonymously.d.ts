import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';
export default function useSignInAnonymously(auth: Auth): readonly [() => Promise<void>, UserCredential | undefined, boolean, FirebaseError | undefined];

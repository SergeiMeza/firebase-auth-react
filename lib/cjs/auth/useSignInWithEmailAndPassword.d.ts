import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';
export default function useSignInWithEmailAndPassword(auth: Auth): readonly [(email: string, password: string) => Promise<void>, UserCredential | undefined, boolean, FirebaseError | undefined];

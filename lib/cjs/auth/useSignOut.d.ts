import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
export default function useSignOut(auth: Auth): readonly [() => Promise<void>, boolean, FirebaseError | undefined];

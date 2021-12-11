import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
export default function useSendPasswordResetEmail(auth: Auth): readonly [(email: string) => Promise<void>, boolean, FirebaseError | undefined];

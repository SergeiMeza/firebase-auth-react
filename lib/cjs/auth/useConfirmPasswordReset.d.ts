import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
export default function useConfirmPasswordReset(auth: Auth): readonly [(code: string, newPassword: string) => Promise<void>, boolean, FirebaseError | undefined];

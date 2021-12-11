import { FirebaseError } from 'firebase/app';
import { ActionCodeSettings, Auth, UserCredential } from 'firebase/auth';
export interface Options {
    sendEmailVerification?: boolean;
    actionCodeSettings?: ActionCodeSettings;
}
export default function useCreateUserWithEmailAndPassword(auth: Auth, options?: Options): readonly [(email: string, password: string) => Promise<void>, UserCredential | undefined, boolean, FirebaseError | undefined];

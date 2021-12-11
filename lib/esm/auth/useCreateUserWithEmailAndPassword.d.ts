import firebase from 'firebase/app';
export interface Options {
    sendEmailVerification?: boolean;
    actionCodeSettings?: firebase.auth.ActionCodeSettings;
}
export default function useCreateUserWithEmailAndPassword(auth: firebase.auth.Auth, options?: Options): readonly [(email: string, password: string) => Promise<void>, any, boolean, firebase.FirebaseError | undefined];

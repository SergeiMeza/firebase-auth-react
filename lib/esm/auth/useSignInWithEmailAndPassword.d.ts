import firebase from 'firebase/app';
export default function useSignInWithEmailAndPassword(auth: firebase.auth.Auth): readonly [(email: string, password: string) => Promise<void>, any, boolean, firebase.FirebaseError | undefined];

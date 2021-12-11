import firebase from 'firebase/app';
export default function useSignInAnonymously(auth: firebase.auth.Auth): readonly [() => Promise<void>, any, boolean, firebase.FirebaseError | undefined];

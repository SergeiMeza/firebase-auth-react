import firebase from 'firebase/app';
export default function useSignInAnonymously(auth: firebase.auth.Auth): readonly [() => Promise<void>, firebase.auth.UserCredential | undefined, boolean, firebase.FirebaseError | undefined];

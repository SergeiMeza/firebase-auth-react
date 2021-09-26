import firebase from 'firebase/app';
export default function useSignInWithCustomToken(auth: firebase.auth.Auth): readonly [(token: string) => Promise<void>, firebase.auth.UserCredential | undefined, boolean, firebase.FirebaseError | undefined];

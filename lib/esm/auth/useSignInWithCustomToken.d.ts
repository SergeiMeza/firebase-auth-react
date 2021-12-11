import firebase from 'firebase/app';
export default function useSignInWithCustomToken(auth: firebase.auth.Auth): readonly [(token: string) => Promise<void>, any, boolean, firebase.FirebaseError | undefined];

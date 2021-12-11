import firebase from 'firebase/app';
export default function useSendPasswordResetEmail(auth: firebase.auth.Auth): readonly [(email: string) => Promise<void>, boolean, firebase.FirebaseError | undefined];

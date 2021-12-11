import firebase from 'firebase/app';
export default function useConfirmPasswordReset(auth: firebase.auth.Auth): readonly [(code: string, newPassword: string) => Promise<void>, boolean, firebase.FirebaseError | undefined];

import { Auth } from 'firebase/auth';
export default function useIsSignInWithEmailLink(auth: Auth): readonly [(email: string) => boolean];

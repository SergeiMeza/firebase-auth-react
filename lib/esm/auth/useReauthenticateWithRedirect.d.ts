import { FirebaseError } from 'firebase/app';
import { AuthProvider, User } from 'firebase/auth';
export default function useReauthenticateWithRedirect(): readonly [
    (user: User, provider: AuthProvider) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

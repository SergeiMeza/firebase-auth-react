import { FirebaseError } from 'firebase/app';
import { AuthCredential, User, UserCredential } from 'firebase/auth';
export default function useReauthenticateWithCredential(): readonly [
    (user: User, authCredential: AuthCredential) => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];

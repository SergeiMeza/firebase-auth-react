import { FirebaseError } from 'firebase/app';
import { AuthCredential, User, UserCredential } from 'firebase/auth';
export default function useLinkWithCredential(user: User, authCredential: AuthCredential): readonly [
    () => Promise<void>,
    UserCredential | undefined,
    boolean,
    FirebaseError | undefined
];

import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';
export default function useGetRedirectResult(auth: Auth): readonly [
    () => Promise<void>,
    UserCredential | null,
    boolean,
    FirebaseError | undefined
];

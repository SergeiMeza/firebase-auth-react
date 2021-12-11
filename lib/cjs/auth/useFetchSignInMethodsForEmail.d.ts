import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
export default function useFetchSignInMethodsForEmail(auth: Auth): readonly [
    (email: string) => Promise<void>,
    string[],
    boolean,
    FirebaseError | undefined
];

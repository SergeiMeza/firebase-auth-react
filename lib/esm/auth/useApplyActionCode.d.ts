import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
export default function useApplyActionCode(auth: Auth): readonly [
    (code: string) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

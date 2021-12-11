import { FirebaseError } from 'firebase/app';
import { ActionCodeInfo, Auth } from 'firebase/auth';
export default function useCheckActionCode(auth: Auth): readonly [
    (code: string) => Promise<void>,
    ActionCodeInfo | undefined,
    boolean,
    FirebaseError | undefined
];

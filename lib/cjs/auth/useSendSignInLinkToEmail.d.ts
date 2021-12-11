import { FirebaseError } from 'firebase/app';
import { ActionCodeSettings, Auth } from 'firebase/auth';
export default function useSendSignInLinkToEmail(auth: Auth): readonly [
    (email: string, actionCodeSettings: ActionCodeSettings) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

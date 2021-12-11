import { FirebaseError } from 'firebase/app';
import { AdditionalUserInfo, UserCredential } from 'firebase/auth';
export default function useGetAdditionalUserInfo(): readonly [
    (credential: UserCredential) => Promise<void>,
    AdditionalUserInfo | null,
    boolean,
    FirebaseError | undefined
];

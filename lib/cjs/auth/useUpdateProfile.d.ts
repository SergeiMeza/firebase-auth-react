import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
export default function useUpdateProfile(): readonly [
    (user: User, { displayName, photoURL: photoUrl, }: {
        displayName?: string | null | undefined;
        photoURL?: string | null | undefined;
    }) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

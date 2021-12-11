import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
export default function useUpdateEmail(): readonly [
    (user: User, newEmail: string) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
export default function useUnlink(): readonly [
    (user: User, providerId: string) => Promise<void>,
    User | undefined,
    boolean,
    FirebaseError | undefined
];

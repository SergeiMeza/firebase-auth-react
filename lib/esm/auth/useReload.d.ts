import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
export default function useReload(): readonly [
    (user: User) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

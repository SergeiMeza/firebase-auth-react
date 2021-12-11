import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
export default function useUpdatePassword(): readonly [
    (user: User, newPassword: string) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

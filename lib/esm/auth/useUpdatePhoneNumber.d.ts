import { FirebaseError } from 'firebase/app';
import { PhoneAuthCredential, User } from 'firebase/auth';
export default function useUpdatePhoneNumber(): readonly [
    (user: User, credential: PhoneAuthCredential) => Promise<void>,
    boolean,
    FirebaseError | undefined
];

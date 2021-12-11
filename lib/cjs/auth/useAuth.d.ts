import { Auth, User } from 'firebase/auth';
export default function useAuth(auth: Auth): readonly [User | null, boolean, any];

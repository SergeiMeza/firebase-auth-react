import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, UserCredential, signInAnonymously } from 'firebase/auth'

export default function useSignInAnonymously(
  auth: Auth,
): readonly [
  () => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInAnonymously = useCallback(async () => {
    setLoading(true)
    try {
      const credential = await signInAnonymously(auth)
      setCredential(credential)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [auth])

  return [_signInAnonymously, credential, loading, error] as const
}

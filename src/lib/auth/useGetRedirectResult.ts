import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, getRedirectResult, UserCredential } from 'firebase/auth'

export default function useGetRedirectResult(
  auth: Auth,
): readonly [
  () => Promise<void>,
  UserCredential | null,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential | null>(null)
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithRedirect = useCallback(async () => {
    setLoading(true)
    try {
      const credential = await getRedirectResult(auth)
      setCredential(credential)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [auth])

  return [_signInWithRedirect, credential, loading, error] as const
}

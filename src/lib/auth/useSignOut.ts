import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, signOut } from 'firebase/auth'

export default function useSignOut(
  auth: Auth,
): readonly [() => Promise<void>, boolean, FirebaseError | undefined] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signOut = useCallback(async () => {
    setLoading(true)
    try {
      await signOut(auth)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [auth])

  return [_signOut, loading, error] as const
}

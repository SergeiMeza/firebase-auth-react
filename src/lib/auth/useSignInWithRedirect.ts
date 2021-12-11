import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, signInWithRedirect, AuthProvider } from 'firebase/auth'

export default function useSignInWithRedirect(
  auth: Auth,
): readonly [
  (provider: AuthProvider) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithRedirect = useCallback(
    async (provider: AuthProvider) => {
      setLoading(true)
      try {
        await signInWithRedirect(auth, provider)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithRedirect, loading, error] as const
}

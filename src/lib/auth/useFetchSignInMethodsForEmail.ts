import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, fetchSignInMethodsForEmail } from 'firebase/auth'

export default function useFetchSignInMethodsForEmail(
  auth: Auth,
): readonly [
  (email: string) => Promise<void>,
  string[],
  boolean,
  FirebaseError | undefined,
] {
  const [signInMethods, setSignInMethods] = useState<string[]>([])
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _fetchSignInMethodsForEmail = useCallback(
    async (email: string) => {
      setLoading(true)
      try {
        const signInMethods = await fetchSignInMethodsForEmail(auth, email)
        setSignInMethods(signInMethods)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_fetchSignInMethodsForEmail, signInMethods, loading, error] as const
}

import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, UserCredential, signInWithCustomToken } from 'firebase/auth'

export default function useSignInWithCustomToken(
  auth: Auth,
): readonly [
  (customToken: string) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithCustomToken = useCallback(
    async (customToken: string) => {
      setLoading(true)
      try {
        const credential = await signInWithCustomToken(auth, customToken)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithCustomToken, credential, loading, error] as const
}

import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  Auth,
  UserCredential,
  signInWithPopup,
  AuthProvider,
} from 'firebase/auth'

export default function useSignInWithPopup(
  auth: Auth,
): readonly [
  (provider: AuthProvider) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithPopup = useCallback(
    async (provider: AuthProvider) => {
      setLoading(true)
      try {
        const credential = await signInWithPopup(auth, provider)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithPopup, credential, loading, error] as const
}

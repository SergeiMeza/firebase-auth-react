import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  Auth,
  UserCredential,
  signInWithCredential,
  AuthCredential,
} from 'firebase/auth'

export default function useSignInWithCredential(
  auth: Auth,
): readonly [
  (credential: AuthCredential) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithCredential = useCallback(
    async (authCredential: AuthCredential) => {
      setLoading(true)
      try {
        const credential = await signInWithCredential(auth, authCredential)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithCredential, credential, loading, error] as const
}

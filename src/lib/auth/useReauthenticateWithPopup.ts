import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  AuthProvider,
  reauthenticateWithPopup,
  User,
  UserCredential,
} from 'firebase/auth'

export default function useReauthenticateWithPopup(): readonly [
  (user: User, provider: AuthProvider) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _reauthenticateWithPopup = useCallback(
    async (user: User, provider: AuthProvider) => {
      setLoading(true)
      try {
        const credential = await reauthenticateWithPopup(user, provider)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_reauthenticateWithPopup, credential, loading, error] as const
}

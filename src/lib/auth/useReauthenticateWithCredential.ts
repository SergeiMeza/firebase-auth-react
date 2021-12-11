import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  AuthCredential,
  reauthenticateWithCredential,
  User,
  UserCredential,
} from 'firebase/auth'

export default function useReauthenticateWithCredential(): readonly [
  (user: User, authCredential: AuthCredential) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _reauthenticateWithCredential = useCallback(
    async (user: User, authCredential: AuthCredential) => {
      setLoading(true)
      try {
        const credential = await reauthenticateWithCredential(
          user,
          authCredential,
        )
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_reauthenticateWithCredential, credential, loading, error] as const
}

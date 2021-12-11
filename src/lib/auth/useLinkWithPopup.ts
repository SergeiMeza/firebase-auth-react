import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  AuthProvider,
  linkWithPopup,
  User,
  UserCredential,
} from 'firebase/auth'

export default function useLinkWithPopup(): readonly [
  (user: User, provider: AuthProvider) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _linkWithPopup = useCallback(
    async (user: User, provider: AuthProvider) => {
      setLoading(true)
      try {
        const credential = await linkWithPopup(user, provider)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_linkWithPopup, credential, loading, error] as const
}

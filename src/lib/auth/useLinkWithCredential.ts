import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  AuthCredential,
  linkWithCredential,
  User,
  UserCredential,
} from 'firebase/auth'

export default function useLinkWithCredential(
  user: User,
  authCredential: AuthCredential,
): readonly [
  () => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _linkWithCredential = useCallback(async () => {
    setLoading(true)
    try {
      const credential = await linkWithCredential(user, authCredential)
      setCredential(credential)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [user, credential])

  return [_linkWithCredential, credential, loading, error] as const
}

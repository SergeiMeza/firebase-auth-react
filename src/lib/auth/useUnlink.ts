import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { unlink, User } from 'firebase/auth'

export default function useUnlink(): readonly [
  (user: User, providerId: string) => Promise<void>,
  User | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [updatedUser, setUpdatedUser] = useState<User>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _unlink = useCallback(async (user: User, providerId: string) => {
    setLoading(true)
    try {
      const _user = await unlink(user, providerId)
      setUpdatedUser(_user)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [])

  return [_unlink, updatedUser, loading, error] as const
}

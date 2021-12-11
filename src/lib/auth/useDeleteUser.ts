import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { deleteUser, User } from 'firebase/auth'

export default function useDeleteUser(): readonly [
  (user: User) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _deleteUser = useCallback(async (user: User) => {
    setLoading(true)
    try {
      await deleteUser(user)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [])

  return [_deleteUser, loading, error] as const
}

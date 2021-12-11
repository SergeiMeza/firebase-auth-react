import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { updatePassword, User } from 'firebase/auth'

export default function useUpdatePassword(): readonly [
  (user: User, newPassword: string) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _updatePassword = useCallback(
    async (user: User, newPassword: string) => {
      setLoading(true)
      try {
        await updatePassword(user, newPassword)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_updatePassword, loading, error] as const
}

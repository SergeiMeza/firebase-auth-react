import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { updateEmail, User } from 'firebase/auth'

export default function useUpdateEmail(): readonly [
  (user: User, newEmail: string) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _updateEmail = useCallback(async (user: User, newEmail: string) => {
    setLoading(true)
    try {
      await updateEmail(user, newEmail)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [])

  return [_updateEmail, loading, error] as const
}

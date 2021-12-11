import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  verifyBeforeUpdateEmail,
  User,
  ActionCodeSettings,
} from 'firebase/auth'

export default function useVerifyBeforeUpdateEmail(): readonly [
  (
    user: User,
    newEmail: string,
    actionCodeSettings?: ActionCodeSettings | null | undefined,
  ) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _verifyBeforeUpdateEmail = useCallback(
    async (
      user: User,
      newEmail: string,
      actionCodeSettings?: ActionCodeSettings | null | undefined,
    ) => {
      setLoading(true)
      try {
        await verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_verifyBeforeUpdateEmail, loading, error] as const
}

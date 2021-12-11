import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { ActionCodeSettings, sendEmailVerification, User } from 'firebase/auth'

export default function useSendEmailVerification(): readonly [
  (user: User, actionCodeSettings: ActionCodeSettings) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _sendEmailVerification = useCallback(
    async (user: User, actionCodeSettings: ActionCodeSettings) => {
      setLoading(true)
      try {
        await sendEmailVerification(user, actionCodeSettings)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_sendEmailVerification, loading, error] as const
}

import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, sendPasswordResetEmail } from 'firebase/auth'

export default function useSendPasswordResetEmail(
  auth: Auth,
): readonly [
  (email: string) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _sendPasswordResetEmail = useCallback(
    async (email: string) => {
      setLoading(true)
      try {
        await sendPasswordResetEmail(auth, email)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_sendPasswordResetEmail, loading, error] as const
}

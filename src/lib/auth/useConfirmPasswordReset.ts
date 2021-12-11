import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, confirmPasswordReset } from 'firebase/auth'

export default function useConfirmPasswordReset(
  auth: Auth,
): readonly [
  (code: string, newPassword: string) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _confirmPasswordReset = useCallback(
    async (code: string, newPassword: string) => {
      setLoading(true)
      try {
        await confirmPasswordReset(auth, code, newPassword)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_confirmPasswordReset, loading, error] as const
}

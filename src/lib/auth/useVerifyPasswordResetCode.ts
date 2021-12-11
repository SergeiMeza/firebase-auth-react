import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { verifyPasswordResetCode, Auth } from 'firebase/auth'

export default function useVerifyPasswordResetCode(
  auth: Auth,
): readonly [
  (code: string) => Promise<void>,
  string | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [email, setEmail] = useState<string>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _verifyPasswordResetCode = useCallback(
    async (code: string) => {
      setLoading(true)
      try {
        const email = await verifyPasswordResetCode(auth, code)
        setEmail(email)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_verifyPasswordResetCode, email, loading, error] as const
}

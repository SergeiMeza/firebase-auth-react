import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { Auth, applyActionCode } from 'firebase/auth'

export default function useApplyActionCode(
  auth: Auth,
): readonly [
  (code: string) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _applyActionCode = useCallback(
    async (code: string) => {
      setLoading(true)
      try {
        await applyActionCode(auth, code)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_applyActionCode, loading, error] as const
}

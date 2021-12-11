import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { ActionCodeInfo, Auth, checkActionCode } from 'firebase/auth'

export default function useCheckActionCode(
  auth: Auth,
): readonly [
  (code: string) => Promise<void>,
  ActionCodeInfo | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [actionCodeInfo, setActionCodeInfo] = useState<ActionCodeInfo>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _checkActionCode = useCallback(
    async (code: string) => {
      setLoading(true)
      try {
        const actionCodeInfo = await checkActionCode(auth, code)
        setActionCodeInfo(actionCodeInfo)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_checkActionCode, actionCodeInfo, loading, error] as const
}

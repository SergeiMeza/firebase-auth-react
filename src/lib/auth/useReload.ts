import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { reload, User } from 'firebase/auth'

export default function useReload(): readonly [
  (user: User) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _reload = useCallback(async (user: User) => {
    setLoading(true)
    try {
      await reload(user)
      setLoading(false)
    } catch (error) {
      setError(error as FirebaseError)
      setLoading(false)
    }
  }, [])

  return [_reload, loading, error] as const
}

import { useEffect, useMemo } from 'react'

import { Auth, User } from 'firebase/auth'
import { useAsync } from '@sergeimeza/foundation-react'

export default function useAuth(
  auth: Auth,
): readonly [User | null, boolean, any] {
  const { loading, error, value, setError, setValue } = useAsync(
    async () => auth.currentUser,
    [],
  )

  useEffect(() => {
    const listener = auth.onAuthStateChanged(setValue, setError)
    return () => {
      listener()
    }
  }, [auth])

  const response: [User | null, boolean, any] = [value, loading, error]
  return useMemo(() => response, response)
}

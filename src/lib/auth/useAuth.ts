import { useEffect, useMemo } from 'react'

import { Auth } from 'firebase/auth'
import { useAsync } from '@sergeimeza/foundation-react'

export default function useAuth(auth: Auth) {
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

  const response = [value, loading, error]
  return useMemo(() => response, response)
}

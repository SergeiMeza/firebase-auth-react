import { useEffect, useMemo } from 'react'

import firebase from 'firebase/app'
import { useAsync } from '@sergeimeza/foundation-react'

export default function useAuth(auth: firebase.auth.Auth) {
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

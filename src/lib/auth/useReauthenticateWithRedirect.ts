import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { AuthProvider, reauthenticateWithRedirect, User } from 'firebase/auth'

export default function useReauthenticateWithRedirect(): readonly [
  (user: User, provider: AuthProvider) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _reauthenticateWithRedirect = useCallback(
    async (user: User, provider: AuthProvider) => {
      setLoading(true)
      try {
        await reauthenticateWithRedirect(user, provider)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_reauthenticateWithRedirect, loading, error] as const
}

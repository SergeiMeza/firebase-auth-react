import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { AuthProvider, linkWithRedirect, User } from 'firebase/auth'

export default function useLinkWithRedirect(): readonly [
  (user: User, provider: AuthProvider) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _linkWithRedirect = useCallback(
    async (user: User, provider: AuthProvider) => {
      setLoading(true)
      try {
        await linkWithRedirect(user, provider)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_linkWithRedirect, loading, error] as const
}

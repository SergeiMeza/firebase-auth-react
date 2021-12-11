import { useCallback } from 'react'

import { Auth, isSignInWithEmailLink } from 'firebase/auth'

export default function useIsSignInWithEmailLink(
  auth: Auth,
): readonly [(email: string) => boolean] {
  const _isSignInWithEmailLink = useCallback(
    (email: string) => {
      const isEmailLink = isSignInWithEmailLink(auth, email)
      return isEmailLink
    },
    [auth],
  )

  return [_isSignInWithEmailLink] as const
}

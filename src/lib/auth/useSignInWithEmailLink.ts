import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  Auth,
  UserCredential,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from 'firebase/auth'

export default function useSignInWithEmailLink(
  auth: Auth,
): readonly [
  (email: string, emailLink: string | undefined) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithEmailLink = useCallback(
    async (email: string, emailLink: string | undefined) => {
      setLoading(true)
      try {
        if (emailLink) {
          const emailLinkValid = isSignInWithEmailLink(auth, emailLink)
          if (!emailLinkValid) {
            setLoading(false)
            return
          }
        }

        const credential = await signInWithEmailLink(auth, email, emailLink)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithEmailLink, credential, loading, error] as const
}

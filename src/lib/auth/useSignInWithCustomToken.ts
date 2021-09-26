import firebase from 'firebase/app'
import { useCallback, useState } from 'react'

export default function useSignInWithCustomToken(auth: firebase.auth.Auth) {
  const [credential, setCredential] = useState<firebase.auth.UserCredential>()
  const [error, setError] = useState<firebase.FirebaseError>()
  const [loading, setLoading] = useState(false)

  const signInWithCustomToken = useCallback(
    async (token: string) => {
      setLoading(true)
      try {
        const credential = await auth.signInWithCustomToken(token)
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as firebase.FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [signInWithCustomToken, credential, loading, error] as const
}

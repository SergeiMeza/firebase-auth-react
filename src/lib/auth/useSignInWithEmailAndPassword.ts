import firebase from 'firebase/app'
import { useCallback, useState } from 'react'

export default function useSignInWithEmailAndPassword(
  auth: firebase.auth.Auth,
) {
  const [credential, setCredential] = useState<firebase.auth.UserCredential>()
  const [error, setError] = useState<firebase.FirebaseError>()
  const [loading, setLoading] = useState(false)

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      try {
        const credential = await auth.signInWithEmailAndPassword(
          email,
          password,
        )
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as firebase.FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [signInWithEmailAndPassword, credential, loading, error] as const
}

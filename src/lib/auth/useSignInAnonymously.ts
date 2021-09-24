import firebase from 'firebase/app'
import { useCallback, useState } from 'react'

export default function useSignInAnonymously(auth: firebase.auth.Auth) {
  const [credential, setCredential] = useState<firebase.auth.UserCredential>()
  const [error, setError] = useState<firebase.FirebaseError>()
  const [loading, setLoading] = useState(false)

  const signInAnonymously = useCallback(async () => {
    setLoading(true)
    try {
      const credential = await auth.signInAnonymously()
      setCredential(credential)
      setLoading(false)
    } catch (error) {
      setError(error as firebase.FirebaseError)
      setLoading(false)
    }
  }, [auth])

  return [signInAnonymously, credential, loading, error] as const
}

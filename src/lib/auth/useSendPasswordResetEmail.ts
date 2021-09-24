import firebase from 'firebase/app'
import { useCallback, useState } from 'react'

export default function useSendPasswordResetEmail(auth: firebase.auth.Auth) {
  const [error, setError] = useState<firebase.FirebaseError>()
  const [loading, setLoading] = useState(false)

  const sendPasswordResetEmail = useCallback(
    async (email: string) => {
      setLoading(true)
      try {
        await auth.sendPasswordResetEmail(email)
        setLoading(false)
      } catch (error) {
        setError(error as firebase.FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [sendPasswordResetEmail, loading, error] as const
}

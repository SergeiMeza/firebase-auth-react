import firebase from 'firebase/app'
import { useCallback, useState } from 'react'

export default function useConfirmPasswordReset(auth: firebase.auth.Auth) {
  const [error, setError] = useState<firebase.FirebaseError>()
  const [loading, setLoading] = useState(false)

  const confirmPasswordReset = useCallback(
    async (code: string, newPassword: string) => {
      setLoading(true)
      try {
        await auth.confirmPasswordReset(code, newPassword)
        setLoading(false)
      } catch (error) {
        setError(error as firebase.FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [confirmPasswordReset, loading, error] as const
}

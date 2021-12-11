import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { PhoneAuthCredential, updatePhoneNumber, User } from 'firebase/auth'

export default function useUpdatePhoneNumber(): readonly [
  (user: User, credential: PhoneAuthCredential) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _updatePhoneNumber = useCallback(
    async (user: User, credential: PhoneAuthCredential) => {
      setLoading(true)
      try {
        await updatePhoneNumber(user, credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_updatePhoneNumber, loading, error] as const
}

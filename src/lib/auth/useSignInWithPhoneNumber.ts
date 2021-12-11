import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  Auth,
  signInWithPhoneNumber,
  ApplicationVerifier,
  ConfirmationResult,
} from 'firebase/auth'

export default function useSignInWithPhoneNumber(
  auth: Auth,
): readonly [
  (phoneNumber: string, appVerifier: ApplicationVerifier) => Promise<void>,
  ConfirmationResult | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _signInWithPhoneNumber = useCallback(
    async (phoneNumber: string, appVerifier: ApplicationVerifier) => {
      setLoading(true)
      try {
        const result = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          appVerifier,
        )
        setConfirmationResult(result)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_signInWithPhoneNumber, confirmationResult, loading, error] as const
}

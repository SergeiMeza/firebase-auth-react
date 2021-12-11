import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  ApplicationVerifier,
  ConfirmationResult,
  reauthenticateWithPhoneNumber,
  User,
} from 'firebase/auth'

export default function useReauthenticateWithPhoneNumber(): readonly [
  (
    user: User,
    phoneNumber: string,
    appVerifier: ApplicationVerifier,
  ) => Promise<void>,
  ConfirmationResult | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult>()

  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _reauthenticateWithPhoneNumber = useCallback(
    async (
      user: User,
      phoneNumber: string,
      appVerifier: ApplicationVerifier,
    ) => {
      setLoading(true)
      try {
        const result = await reauthenticateWithPhoneNumber(
          user,
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
    [],
  )

  return [
    _reauthenticateWithPhoneNumber,
    confirmationResult,
    loading,
    error,
  ] as const
}

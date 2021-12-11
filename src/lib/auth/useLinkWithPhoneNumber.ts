import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  ApplicationVerifier,
  ConfirmationResult,
  linkWithPhoneNumber,
  User,
} from 'firebase/auth'

export default function useLinkWithPhoneNumber(): readonly [
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

  const _linkWithPhoneNumber = useCallback(
    async (
      user: User,
      phoneNumber: string,
      appVerifier: ApplicationVerifier,
    ) => {
      setLoading(true)
      try {
        const result = await linkWithPhoneNumber(user, phoneNumber, appVerifier)
        setConfirmationResult(result)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_linkWithPhoneNumber, confirmationResult, loading, error] as const
}

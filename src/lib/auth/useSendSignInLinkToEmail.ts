import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { ActionCodeSettings, Auth, sendSignInLinkToEmail } from 'firebase/auth'

export default function useSendSignInLinkToEmail(
  auth: Auth,
): readonly [
  (email: string, actionCodeSettings: ActionCodeSettings) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _sendSignInLinkToEmail = useCallback(
    async (email: string, actionCodeSettings: ActionCodeSettings) => {
      setLoading(true)
      try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_sendSignInLinkToEmail, loading, error] as const
}

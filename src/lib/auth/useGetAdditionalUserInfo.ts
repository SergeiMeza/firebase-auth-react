import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  AdditionalUserInfo,
  getAdditionalUserInfo,
  UserCredential,
} from 'firebase/auth'

export default function useGetAdditionalUserInfo(): readonly [
  (credential: UserCredential) => Promise<void>,
  AdditionalUserInfo | null,
  boolean,
  FirebaseError | undefined,
] {
  const [additionalUserInfo, setAdditionalUserInfo] =
    useState<AdditionalUserInfo | null>(null)
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _getAdditionalUserInfo = useCallback(
    async (credential: UserCredential) => {
      setLoading(true)
      try {
        const info = await getAdditionalUserInfo(credential)
        setAdditionalUserInfo(info)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_getAdditionalUserInfo, additionalUserInfo, loading, error] as const
}

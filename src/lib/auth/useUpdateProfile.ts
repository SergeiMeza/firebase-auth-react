import { useCallback, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import { updateProfile, User } from 'firebase/auth'

export default function useUpdateProfile(): readonly [
  (
    user: User,
    {
      displayName,
      photoURL: photoUrl,
    }: {
      displayName?: string | null | undefined
      photoURL?: string | null | undefined
    },
  ) => Promise<void>,
  boolean,
  FirebaseError | undefined,
] {
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _updateProfile = useCallback(
    async (
      user: User,
      {
        displayName,
        photoURL: photoUrl,
      }: {
        displayName?: string | null | undefined
        photoURL?: string | null | undefined
      },
    ) => {
      setLoading(true)
      try {
        await updateProfile(user, {
          displayName,
          photoURL: photoUrl,
        })
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [],
  )

  return [_updateProfile, loading, error] as const
}

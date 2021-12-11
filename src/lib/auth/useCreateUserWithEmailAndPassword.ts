import { useCallback, useRef, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  ActionCodeSettings,
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'

export interface Options {
  sendEmailVerification?: boolean
  actionCodeSettings?: ActionCodeSettings
}

export default function useCreateUserWithEmailAndPassword(
  auth: Auth,
  options?: Options,
): readonly [
  (email: string, password: string) => Promise<void>,
  UserCredential | undefined,
  boolean,
  FirebaseError | undefined,
] {
  const optionsRef = useRef<Options>()
  optionsRef.current = options ?? {}

  const [credential, setCredential] = useState<UserCredential>()
  const [error, setError] = useState<FirebaseError>()
  const [loading, setLoading] = useState(false)

  const _createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      try {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        )
        if (options && options.sendEmailVerification && credential.user) {
          await sendEmailVerification(
            credential.user,
            options?.actionCodeSettings,
          )
        }
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [_createUserWithEmailAndPassword, credential, loading, error] as const
}

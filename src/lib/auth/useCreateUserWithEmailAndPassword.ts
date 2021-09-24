import firebase from 'firebase/app'
import { useCallback, useRef, useState } from 'react'

export interface Options {
  sendEmailVerification?: boolean
  actionCodeSettings?: firebase.auth.ActionCodeSettings
}

export default function useCreateUserWithEmailAndPassword(
  auth: firebase.auth.Auth,
  options?: Options,
) {
  const optionsRef = useRef<Options>()
  optionsRef.current = options ?? {}

  const [credential, setCredential] = useState<firebase.auth.UserCredential>()
  const [error, setError] = useState<firebase.FirebaseError>()
  const [loading, setLoading] = useState(false)

  const createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      try {
        const credential = await auth.createUserWithEmailAndPassword(
          email,
          password,
        )
        if (options && options.sendEmailVerification && credential.user) {
          await credential.user.sendEmailVerification(
            options?.actionCodeSettings,
          )
        }
        setCredential(credential)
        setLoading(false)
      } catch (error) {
        setError(error as firebase.FirebaseError)
        setLoading(false)
      }
    },
    [auth],
  )

  return [createUserWithEmailAndPassword, credential, loading, error] as const
}

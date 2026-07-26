'use client'

import { useState } from 'react'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { setMemberPasswordAction } from '../actions/setMemberPassword'

// Holds the typed password and submits it. The toast reports the refusal or
// "Password set" — never the password. A refusal keeps the modal open so the
// typed value isn't lost.
export function useSetPassword(contactId, onDone) {
  const [password, setPassword] = useState('')

  const finish = (result) => {
    if (!result?.ok) return

    setPassword('')
    onDone()
  }

  const run = useActionHandler(setMemberPasswordAction, {
    toast: 'Password set', onDone: finish
  })

  return {
    password,
    setPassword,
    submit: () => run(contactId, password)
  }
}

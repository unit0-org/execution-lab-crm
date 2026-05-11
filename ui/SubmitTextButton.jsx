'use client'

import { useFormStatus } from 'react-dom'
import { TextButton } from './TextButton'

// A TextButton that auto-disables while the enclosing form is pending.
// No spinner — text buttons are tiny, the disabled state is the signal.
export function SubmitTextButton({ children }) {
  const { pending } = useFormStatus()

  return <TextButton disabled={pending}>{children}</TextButton>
}

'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './Button'
import { Spinner } from './Spinner'

// Drop-in <Button type="submit"> that reflects its enclosing form's pending
// state: disabled + spinner while the action runs. No per-call-site wiring.
export function SubmitButton({ children, ...rest }) {
  const { pending } = useFormStatus()
  if (pending) return <Button {...rest} type="submit" disabled><Spinner size={12} /></Button>
  return <Button {...rest} type="submit">{children}</Button>
}

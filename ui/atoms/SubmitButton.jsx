'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './Button'
import { Pending } from './Pending'

// Drop-in <Button type="submit"> that reflects its form's pending state:
// disabled + spinner while the action runs, without changing the
// button's size (the label's footprint is preserved). No call-site wiring.
export function SubmitButton({ children, ...rest }) {
  const { pending } = useFormStatus()
  const content = pending ? <Pending>{children}</Pending> : children

  return (
    <Button {...rest} type="submit" disabled={pending} aria-busy={pending}>
      {content}
    </Button>
  )
}

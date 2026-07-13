'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './Button'

/**
 * Submit button that reflects its form's pending state: disabled +
 * spinner while the action runs, without changing the button's size.
 * Pass `disabled` to also keep it disabled when there's nothing to submit.
 */
export function SubmitButton({ children, disabled, ...rest }) {
  const { pending } = useFormStatus()

  return (
    <Button {...rest} type="submit" loading={pending} disabled={disabled}>
      {children}
    </Button>
  )
}

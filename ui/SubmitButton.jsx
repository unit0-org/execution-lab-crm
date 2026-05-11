'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './Button'
import { Spinner } from './Spinner'

// A submit button that auto-shows a spinner while the enclosing form
// is pending. Drop-in for <Button type="submit">.
export function SubmitButton({ children, tone, size, block }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" tone={tone} size={size} block={block} disabled={pending}>
      {pending ? <Spinner size={12} /> : children}
    </Button>
  )
}

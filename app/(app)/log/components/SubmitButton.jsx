'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/ui/Button'
import { SubmitButtonLabel } from './SubmitButtonLabel'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" tone="primary" size="md" disabled={pending}>
      <SubmitButtonLabel pending={pending} />
    </Button>
  )
}

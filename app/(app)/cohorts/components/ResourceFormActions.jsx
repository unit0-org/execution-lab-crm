import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'

export function ResourceFormActions({ onCancel }) {
  return (
    <Inline gap="sm">
      <SubmitButton tone="primary" size="sm">Add</SubmitButton>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}

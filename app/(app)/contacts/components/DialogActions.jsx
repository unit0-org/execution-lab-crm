import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'

export function DialogActions({ label, tone = 'primary', onCancel }) {
  return (
    <Inline gap="sm">
      <SubmitButton tone={tone} size="sm">{label}</SubmitButton>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'

// The composer's action row: submit + cancel, matching the app's dialogs.
export function CommentFormActions({ onCancel }) {
  return (
    <Inline gap="sm">
      <SubmitButton tone="primary" size="sm">Add comment</SubmitButton>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'

export function MergeConfirm({ winnerId, onConfirm, onCancel }) {
  return (
    <Inline gap="sm">
      <Button tone="primary" size="sm"
        onClick={() => onConfirm(winnerId)}>Merge</Button>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}

'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useToggle } from '@/ui/molecules/useToggle'
import { DismissSuggestion } from './DismissSuggestion'

const MERGE_MESSAGE =
  'The manual meeting is folded into the synced one. This cannot be undone.'

// Merging folds one meeting into another for good, so it asks first.
export function SuggestionActions({ onMerge, onDismiss }) {
  const confirm = useToggle()
  const run = () => { confirm.hide(); onMerge() }

  return (
    <Inline gap="sm">
      <Button tone="primary" size="sm" onClick={confirm.show}>Merge</Button>
      <DismissSuggestion onDismiss={onDismiss} />
      <ConfirmDialog open={confirm.open} title="Merge these meetings?"
        message={MERGE_MESSAGE} confirmLabel="Merge" tone="primary"
        onConfirm={run} onCancel={confirm.hide} />
    </Inline>
  )
}

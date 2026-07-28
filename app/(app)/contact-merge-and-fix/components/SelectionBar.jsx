'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'
import { FormActions } from '@/ui/molecules/FormActions'

// One bar for the whole surface: what is checked across both sections, and
// the single action that runs it.
export function SelectionBar({ count, onApply }) {
  return (
    <StickyBar active={count > 0}>
      <GrowRow>
        <Text size="sm">{count} selected</Text>
        <FormActions label="Apply selected" onConfirm={onApply} />
      </GrowRow>
    </StickyBar>
  )
}

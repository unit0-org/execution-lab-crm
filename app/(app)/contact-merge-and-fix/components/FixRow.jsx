'use client'

import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { Text } from '@/ui/atoms/Text'
import { fixSelectionKey } from '../hooks/selectionKeys'

export function FixRow({ fix, selection }) {
  const key = fixSelectionKey(fix)

  return (
    <Inline gap="sm">
      <Checkbox checked={selection.has(key)} label={fix.current}
        onChange={() => selection.toggle(key)} />
      <Text size="sm">“{fix.current}” → “{fix.proposed}”</Text>
    </Inline>
  )
}

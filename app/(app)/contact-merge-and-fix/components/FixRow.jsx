'use client'

import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { Text } from '@/ui/atoms/Text'
import { fixKey } from '../hooks/fixKey'

export function FixRow({ fix, checked, onToggle }) {
  return (
    <Inline gap="sm">
      <Checkbox checked={checked} label={fix.current}
        onChange={() => onToggle(fixKey(fix))} />
      <Text size="sm">“{fix.current}” → “{fix.proposed}”</Text>
    </Inline>
  )
}

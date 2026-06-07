'use client'

import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { Text } from '@/ui/atoms/Text'

export function GstCheckbox({ gst, onGst }) {
  return (
    <Inline gap="sm">
      <Checkbox checked={gst} onChange={onGst} label="Add GST (5%)" />
      <Text>Add GST (5%)</Text>
    </Inline>
  )
}

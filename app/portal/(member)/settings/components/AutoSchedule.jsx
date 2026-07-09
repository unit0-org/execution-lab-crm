'use client'

import { Inline } from '@/ui/layout/Inline'
import { TextField } from '@/ui/atoms/TextField'

// The two switch times, shown only while the auto theme mode is selected.
export function AutoSchedule(props) {
  const { mode, darkAt, dayAt, onDarkAt, onDayAt } = props

  if (mode !== 'auto') return null

  return (
    <Inline gap="md" align="end">
      <TextField label="Switch to dark at" type="time"
        value={darkAt} onChange={onDarkAt} />
      <TextField label="Switch to light at" type="time"
        value={dayAt} onChange={onDayAt} />
    </Inline>
  )
}

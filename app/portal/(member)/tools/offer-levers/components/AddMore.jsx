'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Select } from '@/ui/atoms/Select'
import { useAddMore } from '../hooks/useAddMore'
import { addMoreOptions } from '../offerInputTypes'

// Pick a repeatable input type and add one on demand.
export function AddMore({ onAdd }) {
  const picker = useAddMore(onAdd)

  return (
    <Inline gap="sm">
      <Select label="Add more" options={addMoreOptions}
        value={picker.type} onChange={picker.pick} />
      <Button onClick={picker.add}>Add</Button>
    </Inline>
  )
}

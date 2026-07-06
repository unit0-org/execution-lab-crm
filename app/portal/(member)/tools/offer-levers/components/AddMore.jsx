'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Select } from '@/ui/atoms/Select'
import { useAddMore } from '@/ui/molecules/useAddMore'
import { addMoreOptions } from '../offerInputTypes'

// Pick a repeatable input type and add one on demand. The Button sits in a
// wrapper so the row's bottom-align reaches it: the button's own
// `align-self: flex-start` (which stops it stretching inside a Stack) would
// otherwise override the row and float it up beside the Select's label.
export function AddMore({ onAdd }) {
  const picker = useAddMore(addMoreOptions, onAdd)

  return (
    <Inline gap="sm" align="end">
      <Select label="Add more" options={addMoreOptions}
        value={picker.value} onChange={picker.pick} />
      <div>
        <Button onClick={picker.add}>Add</Button>
      </div>
    </Inline>
  )
}

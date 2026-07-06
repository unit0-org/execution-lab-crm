'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Select } from '@/ui/atoms/Select'
import { useAddMore } from '@/ui/molecules/useAddMore'
import { addMoreOptions } from '../offerInputTypes'

const PLACEHOLDER = { value: '', label: '-- Please select --' }
const options = [PLACEHOLDER, ...addMoreOptions]

// Pick a repeatable input type and add one on demand. Starts on a
// placeholder (Add stays disabled until a real type is chosen). The Button
// sits in a wrapper so the row's bottom-align reaches it — its own
// align-self would otherwise float it up beside the Select's label.
export function AddMore({ onAdd }) {
  const picker = useAddMore(options, (type) => type && onAdd(type))

  return (
    <Inline gap="sm" align="end">
      <Select label="Add more" options={options}
        value={picker.value} onChange={picker.pick} />
      <div>
        <Button onClick={picker.add} disabled={!picker.value}>Add</Button>
      </div>
    </Inline>
  )
}

'use client'

import { Checkbox } from '@/ui/Checkbox'

const allIds = (contacts) => contacts.map((c) => c.id)

export function SelectAllCheckbox({ contacts, selection }) {
  const total = contacts.length
  const selected = selection.count
  const allChecked = total > 0 && selected === total
  const someChecked = selected > 0 && selected < total

  const onChange = () => {
    if (allChecked) selection.clear()
    else selection.setMany(allIds(contacts))
  }

  return (
    <Checkbox
      label="Select all contacts"
      checked={allChecked}
      indeterminate={someChecked}
      onChange={onChange}
    />
  )
}

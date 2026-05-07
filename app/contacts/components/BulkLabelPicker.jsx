'use client'

import { useTransition } from 'react'
import { InlineForm } from '@/ui/InlineForm'
import { Select } from '@/ui/Select'
import { bulkApplyLabel } from '../actions'
import { HiddenContactIds } from './HiddenContactIds'
import { AddLabelOption } from './AddLabelOption'

const onChangeSubmit = (after, start) => (e) => {
  const fd = new FormData(e.currentTarget.form)
  start(async () => { await bulkApplyLabel(fd); after?.() })
}

export function BulkLabelPicker({ selectedIds, labels, onApplied }) {
  const [, start] = useTransition()

  return (
    <InlineForm action={bulkApplyLabel}>
      <HiddenContactIds ids={selectedIds} />
      <Select name="label_id" defaultValue="" onChange={onChangeSubmit(onApplied, start)}>
        <option value="" disabled>Apply label…</option>
        {labels.map((l) => <AddLabelOption key={l.id} label={l} />)}
      </Select>
    </InlineForm>
  )
}

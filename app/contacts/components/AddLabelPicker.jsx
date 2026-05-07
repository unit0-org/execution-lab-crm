'use client'

import { useTransition } from 'react'
import { InlineForm } from '@/ui/InlineForm'
import { Select } from '@/ui/Select'
import { applyLabel } from '../actions'
import { AddLabelOption } from './AddLabelOption'

const submitOnChange = (fn, after, start) => (e) => {
  const formData = new FormData(e.currentTarget.form)
  start(async () => { await fn(formData); after?.() })
}

export function AddLabelPicker({ contactId, available, onMutate }) {
  const [, start] = useTransition()
  if (!available.length) return null

  return (
    <InlineForm action={applyLabel}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Select name="label_id" defaultValue="" onChange={submitOnChange(applyLabel, onMutate, start)}>
        <option value="" disabled>+ label…</option>
        {available.map((l) => <AddLabelOption key={l.id} label={l} />)}
      </Select>
    </InlineForm>
  )
}

'use client'

import { useTransition } from 'react'
import { InlineForm } from '@/ui/InlineForm'
import { Select } from '@/ui/Select'
import { applyType } from '../actions'
import { ContactTypeOption } from './ContactTypeOption'

const submitOnChange = (after, start) => (e) => {
  const formData = new FormData(e.currentTarget.form)
  start(async () => { await applyType(formData); after?.() })
}

export function AddContactTypePicker({ contactId, available, onMutate }) {
  const [, start] = useTransition()
  if (!available.length) return null

  return (
    <InlineForm action={applyType}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Select name="type_id" defaultValue="" onChange={submitOnChange(onMutate, start)}>
        <option value="" disabled>+ type…</option>
        {available.map((t) => <ContactTypeOption key={t.id} type={t} />)}
      </Select>
    </InlineForm>
  )
}

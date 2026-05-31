'use client'

import { useState } from 'react'
import { FieldDisplay } from './FieldDisplay'
import { FieldEdit } from './FieldEdit'

export function EditableField({ contactId, field, label, value }) {
  const [editing, setEditing] = useState(false)
  const [current, setCurrent] = useState(value ?? '')

  const onSaved = (saved) => {
    setCurrent(saved)
    setEditing(false)
  }

  if (!editing) {
    const edit = () => setEditing(true)

    return <FieldDisplay label={label} value={current} onEdit={edit} />
  }

  return (
    <FieldEdit contactId={contactId} field={field} label={label}
      value={current} onSaved={onSaved} />
  )
}

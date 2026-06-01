'use client'

import { useState } from 'react'
import { FieldDisplay } from './FieldDisplay'
import { FieldEdit } from './FieldEdit'

export function EditableField({ label, value, action, hidden }) {
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
    <FieldEdit label={label} value={current} action={action} hidden={hidden}
      onSaved={onSaved} onCancel={() => setEditing(false)} />
  )
}

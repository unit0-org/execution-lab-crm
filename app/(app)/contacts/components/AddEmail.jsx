'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useReveal } from '../hooks/useReveal'
import { AddEmailForm } from './AddEmailForm'

export function AddEmail({ contactId, onChanged }) {
  const { shown, show, hide } = useReveal()

  const saved = () => {
    onChanged()
    hide()
  }

  if (!shown) {
    return (
      <IconButton label="Add email" onClick={show}>
        <Icon name="plus" />
      </IconButton>
    )
  }

  return (
    <AddEmailForm contactId={contactId} onSaved={saved} onCancel={hide} />
  )
}

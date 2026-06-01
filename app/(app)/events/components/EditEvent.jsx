'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Modal } from '@/ui/organisms/Modal'
import { EditEventForm } from './EditEventForm'
import { useReveal } from '../hooks/useReveal'

export function EditEvent({ event, onSaved }) {
  const edit = useReveal()

  const saved = () => {
    onSaved()
    edit.hide()
  }

  return (
    <>
      <IconButton label="Edit event" title="Edit event" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <Modal open={edit.shown} onClose={edit.hide}>
        <EditEventForm event={event} onSaved={saved} onCancel={edit.hide} />
      </Modal>
    </>
  )
}

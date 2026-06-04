'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Modal } from '@/ui/organisms/Modal'
import { EditMeetingForm } from './EditMeetingForm'
import { useReveal } from '../hooks/useReveal'

export function EditMeeting({ meeting, onSaved }) {
  const edit = useReveal()

  const saved = () => {
    onSaved()
    edit.hide()
  }

  return (
    <>
      <IconButton label="Edit meeting" title="Edit meeting"
        onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <Modal open={edit.shown} onClose={edit.hide}>
        <EditMeetingForm meeting={meeting} onSaved={saved}
          onCancel={edit.hide} />
      </Modal>
    </>
  )
}

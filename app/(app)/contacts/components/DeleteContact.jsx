'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Modal } from '@/ui/organisms/Modal'
import { useReveal } from '../hooks/useReveal'
import { ConfirmDelete } from './ConfirmDelete'

export function DeleteContact({ contactId }) {
  const { shown, show, hide } = useReveal()

  return (
    <>
      <IconButton tone="danger" label="Delete contact" onClick={show}>
        <Icon name="trash" />
      </IconButton>
      <Modal open={shown} onClose={hide}>
        <ConfirmDelete contactId={contactId} onCancel={hide} />
      </Modal>
    </>
  )
}

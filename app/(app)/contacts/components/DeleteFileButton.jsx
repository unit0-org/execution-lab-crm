'use client'

import { useReveal } from '../hooks/useReveal'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'

export function DeleteFileButton({ file, onDelete }) {
  const confirm = useReveal()

  const remove = () => {
    onDelete(file.id)
    confirm.hide()
  }

  return (
    <>
      <IconButton label="Delete file" onClick={confirm.show}>
        <Icon name="trash" size={16} />
      </IconButton>
      <ConfirmDialog open={confirm.shown} title="Delete file"
        message={`Delete ${file.fileName}? This cannot be undone.`}
        onConfirm={remove} onCancel={confirm.hide} />
    </>
  )
}

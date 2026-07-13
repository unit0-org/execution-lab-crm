'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useToggle } from '@/ui/molecules/useToggle'
import { useDeleteAutomation } from '../hooks/useDeleteAutomation'

export function DeleteAutomation({ automation, onChanged }) {
  const confirm = useToggle()
  const remove = useDeleteAutomation(automation, onChanged, confirm.hide)

  return (
    <>
      <IconButton label="Delete automation" onClick={confirm.show}>
        <Icon name="trash" size={16} />
      </IconButton>
      <ConfirmDialog open={confirm.open} title="Delete automation?"
        message={automation.name} onConfirm={remove} onCancel={confirm.hide} />
    </>
  )
}

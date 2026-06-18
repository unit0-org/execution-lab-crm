'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Popover } from '@/ui/molecules/Popover'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { InvoiceMenuItems } from './InvoiceMenuItems'
import { UploadToDriveModal } from './UploadToDriveModal'
import { useInvoiceMenu } from '../hooks/useInvoiceMenu'

export function InvoiceRowMenu({ invoice, onChanged }) {
  const m = useInvoiceMenu(invoice, onChanged)
  const trigger = (
    <IconButton label="Invoice actions" onClick={m.toggle}>
      <Icon name="more" size={18} />
    </IconButton>
  )

  return (
    <>
      <Popover open={m.open} onClose={m.close} trigger={trigger} align="end">
        <InvoiceMenuItems on={m} />
      </Popover>
      <UploadToDriveModal invoice={invoice} flow={m.upload} />
      <ConfirmDialog open={m.confirming} title="Delete invoice?"
        onConfirm={m.remove} onCancel={m.cancelDelete} />
    </>
  )
}

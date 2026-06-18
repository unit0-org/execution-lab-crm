'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { useUploadToDrive } from './useUploadToDrive'
import { useDeleteInvoice } from './useDeleteInvoice'
import { openInvoicePdf } from './openInvoicePdf'

// Behavior for an invoice row's kebab menu: open state plus the row ops
// (download, upload to Drive, delete-with-confirm), each closing the menu.
export function useInvoiceMenu(invoice, onChanged) {
  const menu = useToggle()
  const del = useToggle()
  const upload = useUploadToDrive(invoice.id, onChanged)
  const deleteInvoice = useDeleteInvoice(onChanged)

  const after = (fn) => () => { fn(); menu.hide() }

  return {
    open: menu.open, toggle: menu.toggle, close: menu.hide, upload,
    download: after(() => openInvoicePdf(invoice.id)),
    startUpload: after(upload.start),
    askDelete: after(del.show),
    confirming: del.open, cancelDelete: del.hide,
    remove: () => { del.hide(); deleteInvoice(invoice.id) }
  }
}

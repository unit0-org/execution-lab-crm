'use client'

import { useState } from 'react'
import { uploadInvoiceToDriveAction } from '../actions/uploadInvoiceToDrive'

// Run the on-demand Drive upload for one invoice, tracking the modal's open
// state, the in-flight flag, and the detailed result to display.
export function useUploadToDrive(invoiceId, onChanged) {
  const [open, setOpen] = useState(false)
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState(null)

  const start = () => {
    setOpen(true)
    setResult(null)
    setRunning(true)
    uploadInvoiceToDriveAction(invoiceId)
      .then(setResult)
      .catch(() => setResult({ ok: false, error: 'Upload failed' }))
      .finally(() => { setRunning(false); onChanged() })
  }

  return { open, running, result, start, close: () => setOpen(false) }
}

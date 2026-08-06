'use client'

import { useState } from 'react'
import { previewInvoiceEmailsAction }
  from '../actions/previewInvoiceEmails'
import { sendFinish } from './sendFinish'
import { sendRunner } from './sendRunner'
import { editDraft } from './editDraft'

export function useInvoiceSendFlow(onDone) {
  const [drafts, setDrafts] = useState(null)
  const [sending, setSending] = useState(false)
  const [progress, setProgress] = useState(null)
  const close = () => { setDrafts(null); setProgress(null) }
  const update = (id, field, value) =>
    setDrafts((prev) => editDraft(prev, id, field, value))
  const start = (invoices) =>
    previewInvoiceEmailsAction(invoices.map((i) => i.id)).then(setDrafts)
  const finish = sendFinish({ setSending, close, onDone })
  const send = sendRunner({ setSending, setProgress, finish })

  return { drafts, sending, progress, start, send, edit: update, cancel: close }
}

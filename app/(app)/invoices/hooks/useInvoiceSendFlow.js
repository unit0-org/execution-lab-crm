'use client'

import { useState } from 'react'
import { previewInvoiceEmailsAction }
  from '../actions/previewInvoiceEmails'
import { bulkSendInvoicesAction } from '../actions/bulkSendInvoices'
import { sendFinish } from './sendFinish'
import { editDraft, sendable } from './editDraft'

export function useInvoiceSendFlow(onDone) {
  const [drafts, setDrafts] = useState(null)
  const [sending, setSending] = useState(false)
  const close = () => setDrafts(null)
  const update = (id, field, value) =>
    setDrafts((prev) => editDraft(prev, id, field, value))
  const start = (invoices) =>
    previewInvoiceEmailsAction(invoices.map((i) => i.id)).then(setDrafts)
  const finish = sendFinish({ setSending, close, onDone })

  const send = (list) => {
    setSending(true)
    bulkSendInvoicesAction(sendable(list))
      .then(finish)
      .catch(() => finish({ failed: 1, error: 'Send failed' }))
  }

  return { drafts, sending, start, send, edit: update, cancel: close }
}

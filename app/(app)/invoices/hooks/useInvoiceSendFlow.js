'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { previewInvoiceEmailsAction }
  from '../actions/previewInvoiceEmails'
import { bulkSendInvoicesAction } from '../actions/bulkSendInvoices'
import { sendResultMessage } from './sendResultMessage'
import { editDraft, sendable } from './editDraft'

export function useInvoiceSendFlow(onDone) {
  const [drafts, setDrafts] = useState(null)
  const [sending, setSending] = useState(false)
  const update = (id, field, value) =>
    setDrafts((prev) => editDraft(prev, id, field, value))
  const start = (invoices) =>
    previewInvoiceEmailsAction(invoices.map((i) => i.id)).then(setDrafts)

  const send = (list) => {
    setSending(true)
    bulkSendInvoicesAction(sendable(list))
      .then((r) => showToast(sendResultMessage(r)))
      .then(() => { setSending(false); setDrafts(null); onDone() })
  }

  return { drafts, sending, start, send, edit: update,
    cancel: () => setDrafts(null) }
}

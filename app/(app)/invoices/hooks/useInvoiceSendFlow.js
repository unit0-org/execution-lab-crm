'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { previewInvoiceEmailsAction }
  from '../actions/previewInvoiceEmails'
import { bulkSendInvoicesAction } from '../actions/bulkSendInvoices'
import { sendResultMessage } from './sendResultMessage'

const idsOf = (invoices) => invoices.map((i) => i.id)

export function useInvoiceSendFlow(onDone) {
  const [previews, setPreviews] = useState(null)
  const [sending, setSending] = useState(false)

  const start = (invoices) =>
    previewInvoiceEmailsAction(idsOf(invoices)).then(setPreviews)

  const confirm = () => {
    setSending(true)
    bulkSendInvoicesAction(idsOf(previews))
      .then((r) => showToast(sendResultMessage(r)))
      .then(() => { setSending(false); setPreviews(null); onDone() })
  }

  return {
    previews, sending, start, confirm,
    cancel: () => setPreviews(null)
  }
}

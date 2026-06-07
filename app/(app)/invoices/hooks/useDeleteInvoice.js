'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { deleteInvoiceAction } from '../actions/deleteInvoice'

const feedback = (result) => showToast(result?.error || 'Invoice deleted')

export function useDeleteInvoice(onChanged) {
  return (id) =>
    deleteInvoiceAction(id).then(feedback).then(onChanged)
}

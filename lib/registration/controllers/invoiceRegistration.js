import { Registration } from '../models'
import { createInvoice } from '@/lib/invoice/controllers/createInvoice'
import { approveInvoice } from '@/lib/invoice/controllers/approveInvoice'
import { sendInvoice } from '@/lib/invoice/controllers/sendInvoice'
import { registrationInvoiceData } from './registrationInvoiceData'

// Create, approve, and email an invoice for a registrant's cohort seat.
export async function invoiceRegistration(orgId, registrationId, amount) {
  const reg = await Registration.findByPk(registrationId, {
    include: [{ association: 'cohort' }]
  }).then((row) => (row ? row.toJSON() : null))

  if (!reg) return { error: 'Registration not found' }

  const data = registrationInvoiceData(reg, amount)
  const invoice = await createInvoice(orgId, data)
  await approveInvoice(invoice.id)

  return sendInvoice(invoice.id)
}

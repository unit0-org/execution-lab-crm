import { Invoice } from '../models'
import { toMemberInvoiceRow } from './toMemberInvoiceRow'

// A member's own invoices finalized for them (approved, sent or paid),
// newest first — the data behind the portal billing page.
export async function listInvoicesForMember(contactId) {
  const rows = await Invoice.scope('memberVisible').findAll({
    where: { contact_id: contactId },
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toMemberInvoiceRow(row.toJSON()))
}

import { Invoice } from '../models'
import { toInvoiceRow } from './toInvoiceRow'

// All invoices for an organization, newest first.
export async function listInvoices(organizationId) {
  const rows = await Invoice.findAll({
    where: { organization_id: organizationId },
    include: [{ association: 'contact' }],
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toInvoiceRow(row.toJSON()))
}

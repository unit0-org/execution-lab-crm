import { Invoice } from '../models'
import { toInvoiceRow } from './toInvoiceRow'

// Invoices raised for a company, newest first (the company's activity).
export async function companyInvoices(companyId) {
  const rows = await Invoice.findAll({
    where: { company_id: companyId },
    include: [{ association: 'contact' }, { association: 'company' }],
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toInvoiceRow(row.toJSON()))
}

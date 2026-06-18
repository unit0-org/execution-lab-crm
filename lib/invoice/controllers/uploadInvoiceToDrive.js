import { Invoice } from '../models'
import { driveTarget } from './driveTarget'
import { runDriveUpload } from './runDriveUpload'

// On-demand Drive upload for one invoice, returning a detailed result (the
// config / render / upload outcome) for the Upload-to-Drive modal. Always
// attempts — unlike the best-effort archive, it never skips or swallows.
export async function uploadInvoiceToDrive(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { ok: false, error: 'Invoice not found' }

  const target = await driveTarget(invoice)

  if (target.error) return { ok: false, error: target.error }

  return runDriveUpload(invoice, target)
}

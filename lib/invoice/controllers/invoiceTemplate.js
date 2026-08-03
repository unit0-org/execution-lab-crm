import { ensureEmailTemplate }
  from '@/lib/email/controllers/ensureEmailTemplate'

// The editable invoice email template.
export function invoiceTemplate() {
  return ensureEmailTemplate('invoice')
}

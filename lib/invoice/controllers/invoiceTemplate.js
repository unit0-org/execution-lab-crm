import { ensureEmailTemplates }
  from '@/lib/email/controllers/ensureEmailTemplates'

// The org's editable invoice email template.
export async function invoiceTemplate(org) {
  const templates = await ensureEmailTemplates(org)

  return templates.find((t) => t.template_key === 'invoice')
}

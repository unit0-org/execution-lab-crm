import { ensureEmailTemplates }
  from '@/lib/email/controllers/ensureEmailTemplates'

// The editable invoice email template.
export async function invoiceTemplate() {
  const templates = await ensureEmailTemplates()

  return templates.find((t) => t.template_key === 'invoice')
}

import { forbidden } from 'next/navigation'
import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { listAutomations } from '@/lib/automation/controllers/listAutomations'
import { listEmailTemplates } from '@/lib/email/controllers/listEmailTemplates'
import { listCategories } from '@/lib/contact/controllers/listCategories'
import { AutomationsView } from './components/AutomationsView'

// Route-root loader. Automations are admin-only; non-admins get a 403.
export async function AutomationsServer() {
  const membership = await currentMembership()

  if (membership?.role !== 'admin') forbidden()

  const [automations, templates, categories] = await Promise.all([
    listAutomations(),
    listEmailTemplates(),
    listCategories()
  ])

  return (
    <AutomationsView automations={automations} templates={templates}
      categories={categories} />
  )
}

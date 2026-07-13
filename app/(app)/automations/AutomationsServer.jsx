import { listAutomations } from '@/lib/automation/controllers/listAutomations'
import { listEmailTemplates } from '@/lib/email/controllers/listEmailTemplates'
import { listCategories } from '@/lib/contact/controllers/listCategories'
import { AutomationsView } from './components/AutomationsView'

// Route-root loader: the rules plus the option lists the builder needs.
export async function AutomationsServer() {
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

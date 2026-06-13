import { listEmailTemplatesAction } from './actions/listEmailTemplates'
import { EmailTemplatesView } from './components/EmailTemplatesView'

// Server-side load for the email-templates tab.
export async function EmailTemplatesServer() {
  const templates = await listEmailTemplatesAction()

  return <EmailTemplatesView templates={templates} />
}

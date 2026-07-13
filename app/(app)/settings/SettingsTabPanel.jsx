import { MembersServer } from './MembersServer'
import { GoogleServer } from './GoogleServer'
import { ConflictsServer } from './ConflictsServer'
import { EmailTemplatesServer } from './EmailTemplatesServer'
import { CompanyServer } from './CompanyServer'
import { InvoicingServer } from './InvoicingServer'
import { CronServer } from '../cron/CronServer'

const PANELS = {
  members: MembersServer,
  google: GoogleServer,
  conflicts: ConflictsServer,
  emails: EmailTemplatesServer,
  company: CompanyServer,
  invoicing: InvoicingServer,
  cron: CronServer
}

// Render the server panel for the active settings tab.
export function SettingsTabPanel({ tab, organizationId }) {
  const Panel = PANELS[tab] || GoogleServer

  return <Panel organizationId={organizationId} />
}

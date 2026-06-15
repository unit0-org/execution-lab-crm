import { MembersServer } from './MembersServer'
import { GoogleServer } from './GoogleServer'
import { ConflictsServer } from './ConflictsServer'
import { EmailTemplatesServer } from './EmailTemplatesServer'
import { CompanyServer } from './CompanyServer'
import { InvoicingServer } from './InvoicingServer'
import { CronHistoryServer } from './CronHistoryServer'
import { AppearanceView } from './components/AppearanceView'

const PANELS = {
  members: MembersServer,
  google: GoogleServer,
  conflicts: ConflictsServer,
  emails: EmailTemplatesServer,
  company: CompanyServer,
  invoicing: InvoicingServer,
  cron: CronHistoryServer,
  appearance: AppearanceView
}

// Render the server panel for the active settings tab.
export function SettingsTabPanel({ tab, organizationId }) {
  const Panel = PANELS[tab] || MembersServer

  return <Panel organizationId={organizationId} />
}

import { SettingsView } from './SettingsView'
import { GoogleContactsView } from './GoogleContactsView'
import { ConflictsView } from './ConflictsView'
import { CompanyView } from './CompanyView'
import { EmailTemplatesView } from './EmailTemplatesView'
import { InvoicingView } from './InvoicingView'
import { AppearanceView } from './AppearanceView'

const PANELS = {
  members: SettingsView,
  google: GoogleContactsView,
  conflicts: ConflictsView,
  emails: EmailTemplatesView,
  company: CompanyView,
  invoicing: InvoicingView,
  appearance: AppearanceView
}

// Render the panel for the active settings tab.
export function SettingsPanel({ tab }) {
  const Panel = PANELS[tab] || SettingsView

  return <Panel />
}

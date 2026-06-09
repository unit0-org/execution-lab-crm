import { SettingsView } from './SettingsView'
import { IntegrationsView } from './IntegrationsView'
import { GoogleContactsView } from './GoogleContactsView'
import { ConflictsView } from './ConflictsView'
import { CompanyView } from './CompanyView'
import { InvoicingView } from './InvoicingView'

const PANELS = {
  members: SettingsView,
  integrations: IntegrationsView,
  google: GoogleContactsView,
  conflicts: ConflictsView,
  company: CompanyView,
  invoicing: InvoicingView
}

// Render the panel for the active settings tab.
export function SettingsPanel({ tab }) {
  const Panel = PANELS[tab] || SettingsView

  return <Panel />
}

import { SettingsView } from './SettingsView'
import { IntegrationsView } from './IntegrationsView'
import { CompanyView } from './CompanyView'
import { InvoicingView } from './InvoicingView'
import { InvitationsView } from './InvitationsView'

const PANELS = {
  members: SettingsView,
  integrations: IntegrationsView,
  company: CompanyView,
  invoicing: InvoicingView,
  invitations: InvitationsView
}

// Render the panel for the active settings tab.
export function SettingsPanel({ tab }) {
  const Panel = PANELS[tab] || SettingsView

  return <Panel />
}

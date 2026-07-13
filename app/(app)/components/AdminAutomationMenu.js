import { withAdminOnly } from './withAdminOnly'
import { AutomationMenu } from './AutomationMenu'

// The topbar lightning menu, shown only to admins.
export const AdminAutomationMenu = withAdminOnly(AutomationMenu)

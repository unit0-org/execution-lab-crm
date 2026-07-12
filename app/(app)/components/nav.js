import {
  DASHBOARD, CRM, EVENTS, SALES, COHORTS, PORTAL_MEMBERS, SETTINGS
} from './navItems'

// Programs group: Cohorts for all; Portal Members is admin-only.
function programsGroup(role) {
  const items = [COHORTS]

  if (role === 'admin') items.push(PORTAL_MEMBERS)

  return { label: 'Programs', items }
}

// The main sidebar: a top link plus the category groups.
export function navFor(role) {
  return [DASHBOARD, CRM, EVENTS, programsGroup(role), SALES]
}

// Bottom of the sidebar: Settings (Cron now lives in the Settings page).
export function settingsNav() {
  return [SETTINGS]
}

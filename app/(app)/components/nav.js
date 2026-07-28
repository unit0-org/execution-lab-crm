import {
  DASHBOARD, CRM, EVENTS, SALES, COHORTS, PORTAL_MEMBERS, SETTINGS, MERGE_FIX
} from './navItems'

// CRM group with Merge & Fix badged by how many items are waiting there.
function crmGroup(mergeFixCount) {
  const badge = (item) =>
    item.href === MERGE_FIX.href ? { ...item, badge: mergeFixCount } : item

  return { ...CRM, items: CRM.items.map(badge) }
}

// Programs group: Cohorts for all; Portal Members is admin-only.
function programsGroup(role) {
  const items = [COHORTS]

  if (role === 'admin') items.push(PORTAL_MEMBERS)

  return { label: 'Programs', icon: 'graduation', items }
}

// The main sidebar: Dashboard on its own, then the working areas as one
// block below it — set apart by space, not by a caption.
export function navFor(role, mergeFixCount) {
  const items =
    [crmGroup(mergeFixCount), EVENTS, programsGroup(role), SALES]

  return [DASHBOARD, { section: true, items }]
}

// Bottom of the sidebar: Settings (Cron now lives in the Settings page).
export function settingsNav() {
  return [SETTINGS]
}

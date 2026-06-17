export const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: 'grid' },
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/events', label: 'Events', icon: 'calendar' },
  { href: '/meetings', label: 'Meetings', icon: 'video' },
  { href: '/cohorts', label: 'Cohorts', icon: 'users' },
  { href: '/purchases', label: 'Purchases', icon: 'card' },
  { href: '/invoices', label: 'Invoices', icon: 'file' }
]

const CRON = { href: '/cron', label: 'Cron', icon: 'refresh' }
const SETTINGS = { href: '/settings', label: 'Settings', icon: 'gear' }

// The main nav (everyone). Settings lives separately, at the bottom.
export function navFor() {
  return NAV
}

// Bottom-of-sidebar nav: Settings for every member; Cron stays admin-only.
export function settingsNav(role) {
  if (role === 'admin') return [CRON, SETTINGS]

  return [SETTINGS]
}

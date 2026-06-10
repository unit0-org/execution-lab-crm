export const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: 'grid' },
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/events', label: 'Events', icon: 'calendar' },
  { href: '/meetings', label: 'Meetings', icon: 'video' },
  { href: '/cohorts', label: 'Cohorts', icon: 'users' },
  { href: '/waitlist', label: 'Waitlist', icon: 'users' },
  { href: '/purchases', label: 'Purchases', icon: 'card' },
  { href: '/invoices', label: 'Invoices', icon: 'file' }
]

const SETTINGS = { href: '/settings', label: 'Settings', icon: 'gear' }

// The main nav (everyone). Settings lives separately, at the bottom.
export function navFor() {
  return NAV
}

// Settings nav (admin only) — rendered at the bottom of the sidebar.
export function settingsNav(role) {
  return role === 'admin' ? [SETTINGS] : []
}

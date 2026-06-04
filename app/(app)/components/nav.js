export const NAV = [
  { href: '/', label: 'Dashboard', icon: 'grid' },
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/events', label: 'Events', icon: 'calendar' },
  { href: '/meetings', label: 'Meetings', icon: 'video' },
  { href: '/purchases', label: 'Purchases', icon: 'card' }
]

const SETTINGS = { href: '/settings', label: 'Settings', emoji: '⚙️' }

// The main nav (everyone). Settings lives separately, at the bottom.
export function navFor() {
  return NAV
}

// Settings nav (admin only) — rendered at the bottom of the sidebar.
export function settingsNav(role) {
  return role === 'admin' ? [SETTINGS] : []
}

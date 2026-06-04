export const NAV = [
  { href: '/', label: 'Dashboard', icon: 'grid' },
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/events', label: 'Events', icon: 'calendar' },
  { href: '/meetings', label: 'Meetings', icon: 'video' },
  { href: '/purchases', label: 'Purchases', icon: 'card' }
]

const SETTINGS = { href: '/settings', label: 'Settings', icon: 'gear' }

// Nav items for the role; admins also get Settings (user management).
export function navFor(role) {
  if (role === 'admin') return [...NAV, SETTINGS]

  return NAV
}

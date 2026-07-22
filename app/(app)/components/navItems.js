// Sidebar links and category groups (data only; nav.js applies roles).
export const DASHBOARD =
  { href: '/dashboard', label: 'Dashboard', icon: 'grid' }
export const SETTINGS =
  { href: '/settings', label: 'Settings', icon: 'gear' }

export const CRM = { label: 'CRM', items: [
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/companies', label: 'Companies', icon: 'building' },
  { href: '/meetings', label: 'Meetings', icon: 'video' }
] }
export const EVENTS = { label: 'Events', items: [
  { href: '/events', label: 'Events', icon: 'calendar' }
] }
export const SALES = { label: 'Sales', items: [
  { href: '/purchases', label: 'Purchases', icon: 'card' },
  { href: '/invoices', label: 'Invoices', icon: 'file' }
] }

// Contacts keeps `users`; these two carry their own glyph so the collapsed
// rail — which is icon-only — never shows the same shape twice.
export const COHORTS =
  { href: '/cohorts', label: 'Cohorts', icon: 'graduation' }
export const PORTAL_MEMBERS =
  { href: '/portal-members', label: 'Portal Members', icon: 'userCheck' }

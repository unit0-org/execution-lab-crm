// Sidebar links and category groups (data only; nav.js applies roles).
export const DASHBOARD =
  { href: '/dashboard', label: 'Dashboard', icon: 'grid' }
export const SETTINGS =
  { href: '/settings', label: 'Settings', icon: 'gear' }

// The one link that carries a count badge (nav.js fills it in).
export const MERGE_FIX =
  { href: '/contact-merge-and-fix', label: 'Merge & Fix', icon: 'merge' }

// A group's own `icon` is what the collapsed rail shows in place of its
// links — one glyph per category, opening the links in a flyout.
export const CRM = { label: 'CRM', icon: 'users', items: [
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/companies', label: 'Companies', icon: 'building' },
  { href: '/meetings', label: 'Meetings', icon: 'video' },
  MERGE_FIX
] }
export const EVENTS = { label: 'Events', icon: 'calendar', items: [
  { href: '/events', label: 'Events', icon: 'calendar' }
] }
export const SALES = { label: 'Sales', icon: 'card', items: [
  { href: '/purchases', label: 'Purchases', icon: 'card' },
  { href: '/invoices', label: 'Invoices', icon: 'file' }
] }

// Contacts keeps `users`; these two carry their own glyph so no two links
// in a category read as the same thing.
export const COHORTS =
  { href: '/cohorts', label: 'Cohorts', icon: 'graduation' }
export const PORTAL_MEMBERS =
  { href: '/portal-members', label: 'Portal Members', icon: 'userCheck' }

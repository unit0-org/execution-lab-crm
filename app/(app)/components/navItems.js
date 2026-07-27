// Sidebar links and category groups (data only; nav.js applies roles).
export const DASHBOARD =
  { href: '/dashboard', label: 'Dashboard', icon: 'grid' }
export const SETTINGS =
  { href: '/settings', label: 'Settings', icon: 'gear' }

// The one link that carries a count badge (nav.js fills it in).
export const MERGE_FIX =
  { href: '/contact-merge-and-fix', label: 'Merge & Fix' }

// Only a category carries an `icon`: it is the glyph the collapsed rail
// shows in place of the category's links, and the one the expanded row
// leads with. The children under it are text-only, indented past it.
export const CRM = { label: 'CRM', icon: 'users', items: [
  { href: '/contacts', label: 'Contacts' },
  { href: '/companies', label: 'Companies' },
  { href: '/meetings', label: 'Meetings' },
  MERGE_FIX
] }
// Events is a plain link, not a one-child category: a header that opens to
// reveal itself would just be a dead click.
export const EVENTS = { href: '/events', label: 'Events', icon: 'calendar' }
export const SALES = { label: 'Sales', icon: 'card', items: [
  { href: '/purchases', label: 'Purchases' },
  { href: '/invoices', label: 'Invoices' }
] }

// Programs' children (nav.js builds that group around them).
export const COHORTS = { href: '/cohorts', label: 'Cohorts' }
export const PORTAL_MEMBERS =
  { href: '/portal-members', label: 'Portal Members' }

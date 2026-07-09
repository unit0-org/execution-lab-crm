import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// Strip a trailing slash (except the bare root) so a portal path compares
// equal to usePathname(), which never carries one.
export function normalizePath(path) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

const item = (path, label, icon, newTab) =>
  ({ href: normalizePath(portalRoutePath(path)), label, icon, newTab })

// The member's own links: the public program listing (opened in a new tab
// so it doesn't navigate them out of the member area), their resources and
// their billing.
export function memberNav() {
  return [
    item('/', 'Programs', 'calendar', true),
    item('/resources', 'Resources', 'file'),
    item('/tools', 'Tools', 'grid'),
    item('/billing', 'Billing', 'card')
  ]
}

// The lower sidebar group: settings sits apart from the main sections.
export function memberSettingsNav() {
  return [item('/settings', 'Settings', 'gear')]
}

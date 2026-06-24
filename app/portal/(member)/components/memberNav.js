import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// Strip a trailing slash (except the bare root) so a portal path compares
// equal to usePathname(), which never carries one.
export function normalizePath(path) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

const item = (path, label, icon) =>
  ({ href: normalizePath(portalRoutePath(path)), label, icon })

// The member's own links: the public program listing and their resources.
export function memberNav() {
  return [
    item('/', 'Programs', 'calendar'),
    item('/resources', 'Resources', 'file')
  ]
}

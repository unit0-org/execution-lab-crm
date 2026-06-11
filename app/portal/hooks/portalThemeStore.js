// The portal's light/dark switch. Theme is a data-theme attribute on <html>;
// a manual toggle persists under a portal-only localStorage key so it never
// collides with the admin app's clock-based theme.
const KEY = 'portalTheme'

const root = () => document.documentElement

export function togglePortalTheme() {
  const dark = root().getAttribute('data-theme') === 'dark'
  const next = dark ? 'light' : 'dark'

  root().setAttribute('data-theme', next)
  localStorage.setItem(KEY, next)
}

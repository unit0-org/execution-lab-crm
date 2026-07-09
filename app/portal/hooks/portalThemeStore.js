// The portal's light/dark theme, applied as a data-theme attribute on
// <html>. It derives from the saved mode (light/dark/auto); an auto mode
// follows the configured switch times. Kept in a portal-only localStorage
// namespace so it never collides with the admin app's clock-based theme.
import { scheduledTheme, minutesOf } from '@/lib/portal/theme/schedule'
import { readPref } from './portalThemePrefs'

const root = () => document.documentElement

const nowMinutes = () => {
  const now = new Date()

  return now.getHours() * 60 + now.getMinutes()
}

// The light/dark theme the saved preferences resolve to right now.
export function resolvePortalTheme() {
  const mode = readPref('mode')

  if (mode !== 'auto') return mode

  return scheduledTheme(nowMinutes(),
    minutesOf(readPref('darkAt')), minutesOf(readPref('dayAt')))
}

export function applyPortalTheme() {
  root().setAttribute('data-theme', resolvePortalTheme())
}

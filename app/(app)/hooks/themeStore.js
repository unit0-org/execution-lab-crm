// Theme is a data-theme attribute on <html>, applied before paint. It
// follows the clock (dark 18:00–05:00); a manual toggle sticks until the
// next boundary, when the clock takes over again.
import { periodAt, themeForPeriod } from './scheduledTheme'

const THEME = 'theme'
const PERIOD = 'themeAutoPeriod'

const root = () => document.documentElement
const period = () => periodAt(new Date().getHours())

const apply = (theme) => {
  root().setAttribute('data-theme', theme)
  localStorage.setItem(THEME, theme)
}

export function toggleTheme() {
  const dark = root().getAttribute('data-theme') === 'dark'
  apply(dark ? 'light' : 'dark')
}

// Apply the clock theme only when we cross into a new period.
export function applyScheduledTheme() {
  const now = period()

  if (localStorage.getItem(PERIOD) === now) return

  localStorage.setItem(PERIOD, now)
  apply(themeForPeriod(now))
}

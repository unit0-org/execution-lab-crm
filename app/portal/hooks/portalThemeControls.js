// The mutations the portal theme UI calls: persist a preference, re-derive
// the applied theme, and notify subscribers so the settings page and the
// floating toggle stay in sync.
import { writePref } from './portalThemePrefs'
import { applyPortalTheme, resolvePortalTheme } from './portalThemeStore'
import { emitThemeChange } from './portalThemeBus'

const change = (name, value) => {
  writePref(name, value)
  applyPortalTheme()
  emitThemeChange()
}

export const setPortalMode = (mode) => change('mode', mode)
export const setPortalDarkAt = (time) => change('darkAt', time)
export const setPortalDayAt = (time) => change('dayAt', time)

// The floating toggle: flip to the opposite of the theme showing now,
// leaving any auto schedule for an explicit light or dark choice.
export function togglePortalTheme() {
  change('mode', resolvePortalTheme() === 'dark' ? 'light' : 'dark')
}

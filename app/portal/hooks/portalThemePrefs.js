// The portal theme preferences: a small, portal-only localStorage namespace
// read and written by the store and the settings page. A legacy
// 'portalTheme' value (light/dark) seeds the mode, so returning visitors
// keep the choice they made before an auto schedule existed.
const KEYS = {
  mode: 'portalThemeMode',
  darkAt: 'portalDarkAt',
  dayAt: 'portalDayAt'
}

export const DEFAULTS = { mode: 'light', darkAt: '18:00', dayAt: '06:00' }

export function readPref(name) {
  const legacy = name === 'mode' ? localStorage.getItem('portalTheme') : null

  return localStorage.getItem(KEYS[name]) || legacy || DEFAULTS[name]
}

export function writePref(name, value) {
  localStorage.setItem(KEYS[name], value)
}

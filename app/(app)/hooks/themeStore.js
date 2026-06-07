// Theme is a data-theme attribute on <html>, set before paint by the inline
// script. Light is the default; toggling flips it and mirrors localStorage.
const KEY = 'theme'

const root = () => document.documentElement

const isDark = () => root().getAttribute('data-theme') === 'dark'

export function toggleTheme() {
  const next = isDark() ? 'light' : 'dark'

  root().setAttribute('data-theme', next)
  localStorage.setItem(KEY, next)
}

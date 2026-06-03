// Source of truth for the sidebar collapse: a class on <html>, set
// before paint by the inline script. Toggling flips it and localStorage.
const KEY = 'sidebar-collapsed'

const root = () => document.documentElement

const isCollapsed = () => root().classList.contains(KEY)

export function toggleCollapsed() {
  const next = !isCollapsed()

  root().classList.toggle(KEY, next)
  localStorage.setItem(KEY, next ? '1' : '0')
}

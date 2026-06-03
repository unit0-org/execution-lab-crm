// Persists the sidebar's collapsed state in localStorage and notifies
// subscribers, so useSyncExternalStore reads it without a hydration flash.
const KEY = 'sidebar-collapsed'
const listeners = new Set()

export const readCollapsed = () => localStorage.getItem(KEY) === '1'

export const subscribeCollapsed = (callback) => {
  listeners.add(callback)

  return () => listeners.delete(callback)
}

export const writeCollapsed = (value) => {
  localStorage.setItem(KEY, value ? '1' : '0')
  listeners.forEach((callback) => callback())
}

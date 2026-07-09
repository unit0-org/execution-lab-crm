// A tiny same-tab pub/sub so the settings controls and the floating toggle
// react to each other's changes: a localStorage write never fires a
// 'storage' event in the very tab that made it.
const TYPE = 'portalthemechange'

export function emitThemeChange() {
  window.dispatchEvent(new Event(TYPE))
}

export function subscribeThemeChange(onChange) {
  window.addEventListener(TYPE, onChange)

  return () => window.removeEventListener(TYPE, onChange)
}

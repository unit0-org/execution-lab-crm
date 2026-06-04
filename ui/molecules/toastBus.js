const listeners = new Set()
let counter = 0

// Show a transient toast message from anywhere in the app.
export function showToast(message) {
  counter += 1
  listeners.forEach((fn) => fn({ id: counter, message }))
}

export function subscribeToasts(fn) {
  listeners.add(fn)

  return () => listeners.delete(fn)
}

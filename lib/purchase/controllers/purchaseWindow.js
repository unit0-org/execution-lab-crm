const WINDOWS = { '7d': 7, '30d': 30, '90d': 90 }

// The start Date for a named purchase window, or null for "all time".
export function windowStart(window) {
  const days = WINDOWS[window]

  return days ? new Date(Date.now() - days * 86400000) : null
}

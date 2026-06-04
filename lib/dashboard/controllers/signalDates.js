const at = (v) => new Date(v)

// Earliest of the given date-ish values, or null.
export const firstOf = (...v) =>
  v.filter(Boolean).map(at).sort((a, b) => a - b)[0] || null

// Latest of the given date-ish values, or null.
export const lastOf = (...v) =>
  v.filter(Boolean).map(at).sort((a, b) => b - a)[0] || null

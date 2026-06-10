const TOKEN = /\{\{\s*(\w+)\s*\}\}/g

// Replace every {{ key }} token with vars[key] (empty string if missing).
export function renderTemplate(text, vars) {
  const values = vars || {}

  return (text || '').replace(TOKEN, (_match, key) => {
    const value = values[key]

    return value == null ? '' : String(value)
  })
}

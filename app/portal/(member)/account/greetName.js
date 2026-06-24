// The member's first name for a greeting, or a friendly fallback.
export function greetName(name) {
  return (name || '').trim().split(/\s+/)[0] || 'there'
}

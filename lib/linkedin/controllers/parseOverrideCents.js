// The settings form takes dollars; the column stores cents. Blank means
// no override — report what each registrant actually paid.
export function parseOverrideCents(dollars) {
  const text = String(dollars ?? '').trim()

  if (!text) return null

  const amount = Number(text.replace(/[^0-9.]/g, ''))

  if (Number.isNaN(amount)) return null

  return Math.round(amount * 100)
}

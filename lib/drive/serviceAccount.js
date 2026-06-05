// Parse a Google service-account credentials JSON string (per-org secret).
export function serviceAccount(raw) {
  if (!raw) throw new Error('Service account JSON is not configured')

  return JSON.parse(raw)
}

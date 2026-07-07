// Authorized GET against the Gmail REST API, returning parsed JSON. A 403
// (the account never granted the gmail scope) is tagged notAuthorized so a
// caller can skip that account instead of failing the whole sync.
export async function gmailFetch(token, url) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  })
  const data = await res.json()

  if (res.ok) return data

  const error = new Error(data.error?.message || 'gmail fetch failed')
  error.notAuthorized = res.status === 403
  throw error
}

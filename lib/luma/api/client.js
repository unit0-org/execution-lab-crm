const BASE = 'https://public-api.luma.com'

// One authenticated GET against the Luma public API. Returns parsed JSON.
export async function lumaFetch(path, params = {}) {
  const url = new URL(BASE + path)

  for (const [key, value] of Object.entries(params))
    if (value != null) url.searchParams.set(key, value)

  const res = await fetch(url, {
    headers: {
      'x-luma-api-key': process.env.LUMA_API_KEY,
      accept: 'application/json'
    }
  })

  if (!res.ok) throw new Error(`Luma API ${path} failed: ${res.status}`)

  return res.json()
}

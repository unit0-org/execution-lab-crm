const BASE = 'https://api.linkedin.com/rest'

// LinkedIn supports a rolling window of recent YYYYMM versions and sunsets
// old ones, so this needs bumping periodically. A version error surfaces as
// a 400 from the call below.
const API_VERSION = '202607'

function headers() {
  return {
    authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    'content-type': 'application/json',
    'linkedin-version': API_VERSION,
    'x-restli-protocol-version': '2.0.0'
  }
}

// One authenticated POST against the LinkedIn Marketing REST API. Throws
// with the response body on anything but success, so callers can log why.
export async function postToLinkedin(path, body) {
  const res = await fetch(BASE + path, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(body)
  })

  if (res.ok) return res

  throw new Error(`LinkedIn ${path} failed: ${res.status} ${await res.text()}`)
}

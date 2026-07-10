import { createHmac, timingSafeEqual } from 'crypto'
import { parseSignatureHeader } from './parseSignatureHeader'

const MAX_AGE_SECONDS = 300

function safeEqual(a, b) {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)

  if (ab.length !== bb.length) return false

  return timingSafeEqual(ab, bb)
}

// Verify Luma's Webhook-Signature: HMAC-SHA256 of `{t}.{body}` in hex, and
// reject stamps older than MAX_AGE_SECONDS to blunt replays.
export function verifyWebhookSignature(body, header, secret) {
  const { t, v1 } = parseSignatureHeader(header)

  if (!t || !v1) return false

  const expected = createHmac('sha256', secret)
    .update(`${t}.${body}`).digest('hex')
  const fresh = Date.now() / 1000 - Number(t) < MAX_AGE_SECONDS

  return fresh && safeEqual(expected, v1)
}

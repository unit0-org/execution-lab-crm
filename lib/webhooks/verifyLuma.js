import crypto from 'node:crypto'

// Luma signs webhooks with HMAC-SHA256 and the secret you configured
// when registering the endpoint. Header: x-luma-signature.
export function verifyLuma(rawBody, signature) {
  const secret = process.env.LUMA_WEBHOOK_SECRET
  if (!secret || !signature) return false
  const hmac = crypto.createHmac('sha256', secret).update(rawBody).digest('hex')
  try { return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(signature)) }
  catch { return false }
}

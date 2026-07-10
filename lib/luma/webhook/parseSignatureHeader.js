// Parse Luma's "t=<ts>,v1=<hex>" Webhook-Signature header into its parts.
export function parseSignatureHeader(header) {
  const parts = {}

  for (const piece of (header || '').split(',')) {
    const [key, value] = piece.split('=')
    parts[key] = value
  }

  return parts
}

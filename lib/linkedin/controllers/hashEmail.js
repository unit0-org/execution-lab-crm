import { createHash } from 'crypto'

// LinkedIn matches people on an unsalted SHA-256 of the lower-cased,
// trimmed address, so the raw email never leaves our server.
export function hashEmail(email) {
  return createHash('sha256')
    .update(String(email).trim().toLowerCase())
    .digest('hex')
}

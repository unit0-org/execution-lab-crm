import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

// The 32-byte AES key from SECRETS_KEY (64 hex chars). A clear error
// here beats a cryptic "Invalid key length" when the env var is unset.
const key = () => {
  const buf = Buffer.from(process.env.SECRETS_KEY || '', 'hex')

  if (buf.length !== 32) throw new Error('SECRETS_KEY must be 64 hex chars')

  return buf
}

// Encrypt a secret to "iv:tag:data" hex using AES-256-GCM.
export function encrypt(text) {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', key(), iv)
  const data = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()])

  return [iv, cipher.getAuthTag(), data]
    .map((b) => b.toString('hex')).join(':')
}

export function decrypt(blob) {
  const [iv, tag, data] = blob.split(':').map((h) => Buffer.from(h, 'hex'))
  const decipher = createDecipheriv('aes-256-gcm', key(), iv)
  decipher.setAuthTag(tag)

  return Buffer.concat([decipher.update(data), decipher.final()]).toString()
}

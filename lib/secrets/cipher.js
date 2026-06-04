import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const key = () => Buffer.from(process.env.SECRETS_KEY || '', 'hex')

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

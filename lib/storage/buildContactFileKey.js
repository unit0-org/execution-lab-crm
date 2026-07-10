import { randomUUID } from 'crypto'

// The object key for a new contact attachment: namespaced by contact so a
// bucket listing groups a contact's files, with a random id so names never
// collide. The human file name is kept in Postgres metadata, not the key.
export function buildContactFileKey(contactId) {
  return `${contactId}/${randomUUID()}`
}

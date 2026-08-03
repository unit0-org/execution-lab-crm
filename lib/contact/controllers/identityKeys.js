import { normalizeEmail } from './normalizeEmail'

// The keys a person can be matched on, namespaced so an email can never
// collide with a phone. Empty when a guest carries neither — those never
// reach us (`isUnidentifiable` refuses them at intake).
export function identityKeys(identity) {
  const email = normalizeEmail(identity.email)
  const keys = []

  if (email) keys.push(`contact-email:${email}`)

  if (identity.phone) keys.push(`contact-phone:${identity.phone}`)

  return keys
}

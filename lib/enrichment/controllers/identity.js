// Helpers for reading a participant/contact identity payload.

// The full name from an identity: the explicit first/last, else `name`.
export function fullNameOf(identity) {
  const joined = [identity.firstName, identity.lastName]
    .filter(Boolean).join(' ').trim()

  return joined || (identity.name || '').trim()
}

// The first/last columns to create a contact from an identity.
export function nameParts(identity) {
  if (identity.firstName || identity.lastName) {
    return { first_name: identity.firstName, last_name: identity.lastName }
  }

  const [first, ...rest] = (identity.name || '').trim().split(/\s+/)

  return { first_name: first || null, last_name: rest.join(' ') || null }
}

// An identity is usable when it carries an email or any name.
export function hasIdentity(identity) {
  return Boolean(identity.email || fullNameOf(identity))
}

// Whether an email is the CRM's platform owner — the only account that
// can invite others to found their own organization.
export function isPlatformOwner(email) {
  const owner = process.env.PLATFORM_OWNER_EMAIL

  return Boolean(owner) && email === owner
}

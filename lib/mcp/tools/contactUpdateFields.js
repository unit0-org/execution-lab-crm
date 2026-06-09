// Map update_contact args to a Contact update payload (only set keys).
export function contactUpdateFields(a) {
  const fields = {}

  if (a.firstName !== undefined) fields.first_name = a.firstName

  if (a.lastName !== undefined) fields.last_name = a.lastName

  if (a.linkedinUrl !== undefined) fields.linkedin_url = a.linkedinUrl || null

  return fields
}

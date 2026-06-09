const lower = (s) => s.toLowerCase()

// True when CRM holds an email or phone that Google's person lacks, so
// a push is worthwhile. Emails compare case-insensitively.
export function missingInGoogle(crm, person) {
  const googleEmails = person.emails.map(lower)
  const googlePhones = person.phones

  const newEmail = crm.emails.some((e) => !googleEmails.includes(lower(e)))
  const newPhone = crm.phones.some((p) => !googlePhones.includes(p))

  return newEmail || newPhone
}

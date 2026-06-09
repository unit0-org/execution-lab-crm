// Lowercased, de-duplicated, non-empty email values from a person.
export function mapEmails(emailAddresses) {
  const values = (emailAddresses || [])
    .map((e) => e.value)
    .filter(Boolean)
    .map((v) => v.toLowerCase())

  return [...new Set(values)]
}

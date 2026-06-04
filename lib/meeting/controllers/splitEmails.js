// Split a free-text attendees field into a clean list of emails.
export function splitEmails(text) {
  if (!text) return []

  return text
    .split(/[\s,;]+/)
    .map((email) => email.trim())
    .filter(Boolean)
}

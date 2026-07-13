// The mention picker's hidden comma-joined contact ids → an array.
export function parseMentionContactIds(formData) {
  const raw = formData.get('mention_contact_ids') || ''

  return raw.split(',').map((s) => s.trim()).filter(Boolean)
}

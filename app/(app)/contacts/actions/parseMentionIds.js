// The mention picker's hidden comma-joined user ids → an array.
export function parseMentionIds(formData) {
  const raw = formData.get('mention_user_ids') || ''

  return raw.split(',').map((s) => s.trim()).filter(Boolean)
}

const TOKEN = /@(\w*)$/

// The @-token query immediately before the caret, or null when there's no
// open mention to complete.
export function mentionQuery(value, caret) {
  const match = value.slice(0, caret).match(TOKEN)

  return match ? match[1] : null
}

// Replace the @query just before the caret with "@Label " and return the
// full new text.
export function insertMention(value, caret, label) {
  const before = value.slice(0, caret).replace(TOKEN, `@${label} `)

  return before + value.slice(caret)
}

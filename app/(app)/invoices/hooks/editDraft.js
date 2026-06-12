// Drafts that can actually be sent (no blocking error).
export const sendable = (drafts) => drafts.filter((d) => !d.error)

// Return the drafts with one field of one draft updated.
export function editDraft(drafts, id, field, value) {
  return drafts.map((draft) =>
    draft.id === id ? { ...draft, [field]: value } : draft)
}

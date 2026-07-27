import { duplicateGroupIds } from './duplicateGroupIds'
import { findFixSuggestions } from './findFixSuggestions'

// How much the Merge & Fix surface has waiting: one per suggested duplicate
// group plus one per safe fix. The sidebar badge's number — counted from the
// same read-time derivation the page shows, so the two never disagree.
export async function countAttentionItems() {
  const [groups, fixes] = await Promise.all([
    duplicateGroupIds(), findFixSuggestions()
  ])

  return groups.length + fixes.length
}

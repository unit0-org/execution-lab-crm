// Best-effort JSON extraction: strip markdown fences, then JSON.parse.
const FENCE = /^```(?:json)?\n?|```$/gm

const empty = () => ({ actions: [], facts: [], newContacts: [], followUp: null })

export function parseExtractionJson(raw) {
  if (!raw) return empty()
  try {
    return { ...empty(), ...JSON.parse(raw.replace(FENCE, '').trim()) }
  } catch {
    return empty()
  }
}

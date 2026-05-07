// Pull a JSON object out of an LLM response — handles raw JSON,
// fenced blocks, and trailing commentary.
export function extractJson(text = '') {
  const fenced = text.match(/```(?:json)?\n([\s\S]*?)\n```/)
  const candidate = fenced ? fenced[1] : text
  try {
    return JSON.parse(candidate)
  } catch {
    const start = candidate.indexOf('{')
    const end = candidate.lastIndexOf('}')
    if (start === -1 || end === -1) return null
    try { return JSON.parse(candidate.slice(start, end + 1)) } catch { return null }
  }
}

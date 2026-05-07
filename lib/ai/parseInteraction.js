import { anthropic, PARSE_MODEL } from './anthropic'
import { extractJson } from './extractJson'
import { regexParse } from './regexParse'
import { PARSE_SYSTEM, buildUserPrompt } from './parsePrompt'

// Returns the parsed draft. Falls back to regex when no API key.
export async function parseInteraction(text, contacts = []) {
  const a = anthropic()
  if (!a) return regexParse(text)

  const res = await a.messages.create({
    model: PARSE_MODEL,
    max_tokens: 1024,
    system: PARSE_SYSTEM,
    messages: [{ role: 'user', content: buildUserPrompt(text, contacts) }],
  })
  const json = extractJson(res.content?.[0]?.text || '')

  return json || regexParse(text)
}

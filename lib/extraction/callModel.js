import { anthropic, EXTRACT_MODEL } from '@/lib/ai/anthropic'
import { SYSTEM_PROMPT } from './prompt'
import { buildUserPrompt } from './userPrompt'
import { parseExtractionJson } from './parseJson'

const empty = () => ({ actions: [], facts: [], newContacts: [], followUp: null })

export async function callExtractionModel(input) {
  const a = anthropic()
  if (!a) return empty()
  const res = await a.messages.create({
    model: EXTRACT_MODEL,
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserPrompt(input) }],
  })
  const text = res.content?.find((c) => c.type === 'text')?.text || ''

  return parseExtractionJson(text)
}

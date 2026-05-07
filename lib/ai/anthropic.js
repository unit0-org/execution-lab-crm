import Anthropic from '@anthropic-ai/sdk'

let client
export function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) return null
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  return client
}

// Current "fast and cheap" Haiku for parsing tasks. Override per-call
// for heavier work (briefings, context bundles).
export const PARSE_MODEL = 'claude-haiku-4-5'

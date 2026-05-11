import { anthropic, PARSE_MODEL } from './anthropic'

const SYSTEM = `You write a 1-2 sentence daily briefing for an operator.
Second person, calm, direct. Mention the most important upcoming
meeting if relevant. No emoji.`

const buildUserPrompt = (state) => `
Today is ${new Date().toDateString()}.

Upcoming meetings (next 7 days):
${state.meetings.map((m) => `- ${m.title || 'Untitled'} at ${m.started_at}`).join('\n') || '(none)'}
`

export async function generateBriefing(state) {
  const a = anthropic()
  if (!a) return ''
  const res = await a.messages.create({
    model: PARSE_MODEL,
    max_tokens: 256,
    system: SYSTEM,
    messages: [{ role: 'user', content: buildUserPrompt(state) }],
  })

  return res.content?.[0]?.text || ''
}

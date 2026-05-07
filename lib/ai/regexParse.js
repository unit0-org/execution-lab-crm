// Best-effort fallback when ANTHROPIC_API_KEY isn't set. Far less
// accurate than Claude — kept so the modal still does something.
const TYPE_RULES = [
  [/coffee|met\b|in person/i, 'met_in_person'],
  [/call\b|phone|zoom|meet\b/i, 'meeting_call'],
  [/follow[\s-]?up/i, 'follow_up_created'],
]

const detectType = (t) => TYPE_RULES.find(([re]) => re.test(t))?.[1] || 'note'
const detectFollowUp = (t) => /follow[\s-]?up in (\d+)\s*(d|w|day|week|mo|month)/i.exec(t)
const days = (n, unit) => /w/i.test(unit) ? n * 7 : /mo/i.test(unit) ? n * 30 : n

export function regexParse(text) {
  const fu = detectFollowUp(text)
  return {
    type: detectType(text),
    occurredAt: new Date().toISOString(),
    notes: text,
    actionItems: [],
    topics: [],
    followUpDays: fu ? days(Number(fu[1]), fu[2]) : null,
    warmthDelta: 0,
    contactEmails: [],
  }
}

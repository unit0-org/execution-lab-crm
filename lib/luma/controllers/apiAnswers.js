function answerText(value) {
  if (value == null) return ''

  if (typeof value === 'boolean') return value ? 'Yes' : 'No'

  if (Array.isArray(value)) return value.join(', ')

  if (typeof value === 'object') return JSON.stringify(value)

  return String(value)
}

// Registration answers from an API guest → our { question, answer } pairs,
// dropping any that came back empty.
export function apiAnswers(guest) {
  return (guest.registration_answers || [])
    .map((a) => ({ question: a.label, answer: answerText(a.value) }))
    .filter((a) => a.question && a.answer)
}

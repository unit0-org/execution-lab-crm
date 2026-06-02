// Shape an answer row into a Q&A nugget for the contact page.
export function toAnswerNugget(row) {
  const participant = row.event_participant || {}
  const event = participant.own_event || {}
  const question = row.registration_question || {}

  return {
    id: row.id,
    question: question.text || 'Question',
    answer: row.answer,
    event: event.title || 'Untitled event',
    date: event.date
  }
}

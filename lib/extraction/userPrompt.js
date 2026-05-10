const formatAttendee = (a) =>
  `- ${a.contacts?.display_name || a.email} <${a.email}>`

export function buildUserPrompt({ meeting, externals, text, kind }) {
  const when = new Date(meeting.started_at).toISOString().slice(0, 10)
  const venue = meeting.location ? ` at ${meeting.location}` : ''

  return `Meeting on ${when}${venue}.
External attendees:
${externals.map(formatAttendee).join('\n') || '(unknown)'}

Source: ${kind === 'notes' ? "user's typed notes" : 'meeting transcript'}.

---
${text}
---

Return only the JSON object — no prose, no code fences.`
}

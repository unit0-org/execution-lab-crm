export const PARSE_SYSTEM = `Extract a structured CRM event from the
user's freeform note. Output strict JSON, no commentary, no markdown.
Schema: { "type": one of "met_in_person"|"meeting_call"|"note"|
"follow_up_created", "occurredAt": ISO datetime (default now),
"notes": string, "actionItems": string[], "topics": string[],
"followUpDays": number|null, "warmthDelta": -1|0|1,
"contactEmails": string[] }. If a phrase like "follow up in 1 week"
appears, set followUpDays. If positive sentiment, warmthDelta=1; if
negative, -1; default 0.`

export const buildUserPrompt = (text, contacts) => `
Known contacts (name → email):
${contacts.map((c) => `- ${c.display_name || 'Unnamed'} → ${c.email || ''}`).join('\n')}

Note:
${text}
`

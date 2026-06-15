import { SECURITY_INSTRUCTIONS } from './instructions.security'

// Domain glossary sent to MCP clients so the tools are used correctly.
const GLOSSARY = `Execution Lab CRM. Glossary and conventions:

- Contact: a person tracked in the CRM, with a name, emails, phones,
  categories and facts. Identified by a UUID.
- Lead vs customer: a contact who has made a qualifying purchase is a
  "customer"; the rest are "leads". The dashboard segments them.
- Category: a user-defined label for grouping contacts (e.g. "VIP",
  "Newsletter"). A contact may have many. Its include_in_leads flag sets
  whether its contacts count toward the leads pipeline.
- Fact (a.k.a. nugget): a recorded fact on a contact — an optional
  label (a question) and a value (the answer).
- Note: a manual free-text note on a contact. Unlike a fact, it has no
  label/value structure — just a body the user writes.
- Meeting: synced from Google Calendar or entered by hand, with a title,
  start/end time, an online flag, participants and notes.
- Participant: a contact attending a meeting; add by contact id or by
  email (the contact is found or created from that email).
- Merge: fold duplicate contacts/meetings into one, keeping all activity;
  the losing records are deleted. This cannot be undone.
- Money is in Canadian dollars (CAD).
- All ids are UUIDs. Deletes and merges are permanent.`

export const INSTRUCTIONS = `${GLOSSARY}\n\n${SECURITY_INSTRUCTIONS}`

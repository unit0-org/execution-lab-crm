// Entry types that can be logged manually. Other types
// (event_attended, page_followed, purchase) come from integrations.
export const MANUAL_ENTRY_TYPES = [
  { value: 'note',                label: 'Note' },
  { value: 'met_in_person',       label: 'Met in person' },
  { value: 'meeting_call',        label: 'Meeting / call' },
  { value: 'follow_up_created',   label: 'Follow-up created' },
  { value: 'follow_up_resolved',  label: 'Follow-up resolved' },
]

import { STATUS_STATES } from './statusStates'

// Invite-only participation is being removed from the CRM, so "Invited"
// is never offered as a filterable attendance status.
const HIDDEN_FIELD = 'invited_at'

// The attendance statuses a contact can be filtered by: each value IS the
// event_participant timestamp column that records the status, so the
// status → column mapping lives here only, derived from STATUS_STATES.
export const PARTICIPATION_STATUSES = STATUS_STATES
  .filter(([field]) => field !== HIDDEN_FIELD)
  .map(([field, label]) => ({ value: field, label }))

const COLUMNS = PARTICIPATION_STATUSES.map(({ value }) => value)

// The timestamp columns the given status values map to. Unknown values
// are dropped, so a hand-edited URL can never widen the query.
export function statusColumns(values = []) {
  return COLUMNS.filter((column) => values.includes(column))
}

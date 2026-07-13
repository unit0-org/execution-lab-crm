import { DateText } from './DateText'

const meta = {
  title: 'Atoms/DateText',
  component: DateText,
  args: { value: '2026-03-14' }
}

export default meta

// Formatted in UTC, so a date-only value never drifts a day.
export const DateOnly = {}

export const WithTime = {
  args: { value: '2026-03-14T18:30:00Z', withTime: true }
}

export const Empty = { args: { value: null } }

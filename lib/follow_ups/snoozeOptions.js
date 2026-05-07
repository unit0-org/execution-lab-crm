// Preset snooze offsets — value is the new due_date (ISO date).
const inDays = (n) => new Date(Date.now() + n * 86400_000).toISOString().slice(0, 10)

export const SNOOZE_OPTIONS = [
  { label: '1 day',   days: 1 },
  { label: '1 week',  days: 7 },
  { label: '1 month', days: 30 },
]

export const optionDate = (option) => inDays(option.days)

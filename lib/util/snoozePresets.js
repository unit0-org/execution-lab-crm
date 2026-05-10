// Presets for "Snooze" actions across cards and document prompts.
const HOUR = 3600 * 1000
const DAY  = 24 * HOUR

const tomorrow = () => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  d.setHours(9, 0, 0, 0)

  return d.toISOString()
}

const inHours = (h) => new Date(Date.now() + h * HOUR).toISOString()

export const SNOOZE_PRESETS = [
  { label: '1 h',       value: () => inHours(1) },
  { label: 'Tomorrow',  value: tomorrow },
  { label: 'Next week', value: () => new Date(Date.now() + 7 * DAY).toISOString() },
]

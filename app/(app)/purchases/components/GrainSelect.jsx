import { Select } from '@/ui/atoms/Select'
import { GRAIN_LABELS } from './grainOptions'

const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

// Granularity dropdown for the chart. Re-buckets the same windowed data.
export function GrainSelect({ value, onChange }) {
  const pick = (event) => onChange(event.target.value.toLowerCase())

  return (
    <Select label="Group by" options={GRAIN_LABELS}
      value={capitalize(value)} onChange={pick} />
  )
}

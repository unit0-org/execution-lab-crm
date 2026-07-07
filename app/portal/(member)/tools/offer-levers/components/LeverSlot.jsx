import { LeverField } from './LeverField'

// One grid cell: a lever, or an empty spacer that reserves the column so a
// lone lever on an odd row stays at half width instead of stretching wide.
export function LeverSlot({ lever, values, onField }) {
  if (!lever) return <div />

  return (
    <LeverField lever={lever} value={values[lever.id]}
      onChange={onField(lever.id)} />
  )
}

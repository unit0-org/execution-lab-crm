import { barAt } from './barAt'

// Show ~12 x-axis labels at most; thin the rest so they never overlap.
const labelStep = (count) => Math.max(1, Math.ceil(count / 12))

// Lay every datum out as a bar, scaled to the largest value.
export function barGeometry(data) {
  const max = Math.max(1, ...data.map((d) => d.value))
  const scale = { max, step: labelStep(data.length),
    slot: 100 / data.length }

  return data.map((d, i) => barAt(d, i, scale))
}

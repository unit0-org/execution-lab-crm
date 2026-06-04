import { CHART_HEIGHT, CHART_TOP, CHART_FOOTER } from './chartDims'

// Geometry for one bar: percentage x positions (responsive width) and
// pixel y/height. A datum is { label, value, valueLabel }.
export function barAt(d, i, { max, step, slot }) {
  const height = ((CHART_HEIGHT - CHART_TOP) * d.value) / max

  return {
    id: d.label,
    x: `${i * slot + slot * 0.15}%`,
    cx: `${i * slot + slot * 0.5}%`,
    width: `${slot * 0.7}%`,
    y: CHART_HEIGHT - height,
    height,
    labelY: CHART_HEIGHT + CHART_FOOTER - 8,
    label: i % step === 0 ? d.label : '',
    title: `${d.label}: ${d.valueLabel}`
  }
}

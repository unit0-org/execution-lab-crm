import { Stack } from '@/ui/layout/Stack'
import { Facet } from './Facet'
import { FACET_ORDER } from '../facetOrder'

// The five facets of a lever value, in the doc's fixed order.
export function Facets({ facets }) {
  return (
    <Stack gap="sm">
      {FACET_ORDER.map((f) => (
        <Facet key={f.key} label={f.label} text={facets[f.key]} />
      ))}
    </Stack>
  )
}

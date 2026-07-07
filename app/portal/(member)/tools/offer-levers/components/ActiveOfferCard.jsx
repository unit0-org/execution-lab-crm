import { Card } from '@/ui/atoms/Card'
import { activeCardTextStyle } from './ActiveOfferCard.styles'

// One active generated offer as a compact card; preserves its line breaks
// and clamps to a few lines so the tree stays tidy.
export function ActiveOfferCard({ value }) {
  return (
    <Card>
      <p style={activeCardTextStyle}>{value}</p>
    </Card>
  )
}

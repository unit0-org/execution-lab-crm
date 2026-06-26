import { Card } from '@/ui/atoms/Card'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { OfferContextFields } from './OfferContextFields'
import { OfferContextPreview } from './OfferContextPreview'

export function OfferContextSection({ values, onField }) {
  return (
    <Card>
      <Collapsible title="Offer context"
        preview={<OfferContextPreview values={values} />}>
        <OfferContextFields values={values} onField={onField} />
      </Collapsible>
    </Card>
  )
}

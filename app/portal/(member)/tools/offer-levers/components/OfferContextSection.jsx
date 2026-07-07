import { Card } from '@/ui/atoms/Card'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { OfferContextFields } from './OfferContextFields'
import { OfferContextPreview } from './OfferContextPreview'

export function OfferContextSection({ values, lists, saved, on }) {
  return (
    <Card>
      <Collapsible title="Offer context" defaultOpen={false}
        preview={<OfferContextPreview values={values} />}>
        <OfferContextFields values={values} lists={lists} saved={saved}
          on={on} />
      </Collapsible>
    </Card>
  )
}

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { OfferReadBody } from './OfferReadBody'

// One read-only section: its heading over whichever body it carries.
export function OfferReadSection({ section }) {
  return (
    <Card>
      <Stack gap="sm">
        <Heading level={3} gutter="none">{section.heading}</Heading>
        <OfferReadBody section={section} />
      </Stack>
    </Card>
  )
}

import { Stack } from '@/ui/layout/Stack'
import { DocHeader } from './DocHeader'
import { Section } from './Section'
import { LeverArticle } from './LeverArticle'
import { leverNumber } from '../leverNumber'

// The whole public guide: hero, the three intro sections, then every lever.
export function OfferLeversDoc({ doc }) {
  return (
    <Stack gap="lg">
      <DocHeader />
      {doc.intro.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
      {doc.levers.map((lever, i) => (
        <LeverArticle key={lever.id} lever={lever} num={leverNumber(i)} />
      ))}
    </Stack>
  )
}

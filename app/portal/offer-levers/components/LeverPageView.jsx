import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { Link } from '@/ui/atoms/Link'
import { portalUrl } from '@/lib/portal/portalUrl'
import { Paragraphs } from './Paragraphs'
import { LeverValues } from './LeverValues'
import { LeverNotes } from './LeverNotes'
import { WhyItMatters } from './WhyItMatters'

// A single lever as its own page: back link, title, and full detail.
export function LeverPageView({ lever }) {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Link href={portalUrl('/offer-levers')}>← All offer levers</Link>
        <MonoLabel tone="accent" caps>Offer Lever</MonoLabel>
        <Display size="lg">{lever.name}</Display>
        <Text tone="muted">{lever.question}</Text>
      </Stack>
      <Paragraphs items={lever.intro} />
      <LeverValues values={lever.values} />
      <LeverNotes notes={lever.notes} />
      <WhyItMatters paras={lever.whyItMatters} />
    </Stack>
  )
}

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { Link } from '@/ui/atoms/Link'
import { portalUrl } from '@/lib/portal/portalUrl'
import { leverSlug } from '@/app/portal/offer-levers/leverSlug'
import { LeverOption } from './LeverOption'

// Popover content for a lever: what the dimension means, one line per
// option, and a link to the lever's full guide page.
export function LeverInfo({ lever }) {
  return (
    <Stack gap="sm">
      <Text size="sm" gutter="none">{lever.desc}</Text>
      <Stack gap="sm">
        {lever.options.map((option, i) => (
          <LeverOption key={option} name={option}
            desc={lever.optDesc[i]} />
        ))}
      </Stack>
      <Link href={portalUrl('/offer-levers/' + leverSlug(lever.id))}>
        Learn more →
      </Link>
    </Stack>
  )
}

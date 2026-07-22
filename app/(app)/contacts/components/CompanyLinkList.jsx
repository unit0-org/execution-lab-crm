import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { CompanyLinkRow } from './CompanyLinkRow'

export function CompanyLinkList({ items }) {
  if (!items.length) return <Text tone="muted">No companies yet.</Text>

  return (
    <Stack gap="xs">
      {items.map((link) => (
        <CompanyLinkRow key={link.id} link={link} />
      ))}
    </Stack>
  )
}

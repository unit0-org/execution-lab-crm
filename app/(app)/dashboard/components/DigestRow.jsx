import { Inline } from '@/ui/layout/Inline'
import { RowPrimary } from './RowPrimary'
import { RowSecondary } from './RowSecondary'

// One digest row: a contact link (or label) with an optional muted detail.
export function DigestRow({ row }) {
  return (
    <Inline gap="sm">
      <RowPrimary text={row.primary} href={row.href} />
      <RowSecondary text={row.secondary} />
    </Inline>
  )
}

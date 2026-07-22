import { Inline } from '@/ui/layout/Inline'
import { Link } from '@/ui/atoms/Link'
import { RoleBadge } from '@/app/(app)/companies/components/RoleBadge'

export function CompanyLinkRow({ link }) {
  return (
    <Inline gap="sm">
      <Link href={`/companies/${link.company.id}`}>{link.company.name}</Link>
      <RoleBadge role={link.role} />
    </Inline>
  )
}

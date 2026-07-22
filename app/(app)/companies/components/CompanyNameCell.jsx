import { Link } from '@/ui/atoms/Link'

// A list row's name cell: the company name linking to its detail page.
export function CompanyNameCell({ company }) {
  return <Link href={`/companies/${company.id}`}>{company.name}</Link>
}

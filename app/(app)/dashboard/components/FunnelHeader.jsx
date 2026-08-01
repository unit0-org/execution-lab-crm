import { PageHeader } from '@/ui/organisms/PageHeader'
import { Heading } from '@/ui/atoms/Heading'
import { FunnelFilters } from './FunnelFilters'

// The dashboard title, with the period and type filters as its actions.
export function FunnelHeader({ filter, types }) {
  return (
    <PageHeader
      title={<Heading gutter="none">Events funnel</Heading>}
      actions={<FunnelFilters filter={filter} types={types} />}
    />
  )
}

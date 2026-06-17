import { CardGrid } from '@/ui/layout/CardGrid'
import { Stat } from '@/ui/molecules/Stat'

// The four headline metrics, in a responsive card grid.
export function DashboardStats({ stats }) {
  return (
    <CardGrid>
      <Stat label="New leads · 7d" value={stats.newLeads} tone="accent"
        href="/contacts?filter=new" />
      <Stat label="Active leads · 30d" value={stats.activeLeads} tone="cold"
        href="/contacts?filter=active" />
      <Stat label="Customers" value={stats.customers} tone="warm"
        href="/contacts?filter=customers" />
    </CardGrid>
  )
}

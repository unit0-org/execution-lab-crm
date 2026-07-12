import { CheckList } from '@/ui/molecules/CheckList'
import { EmptyState } from '@/ui/molecules/EmptyState'

// The share picker body: a checkbox row per person, or an empty state when
// there's no one to share with yet.
export function ShareList({ options, selected, onToggle }) {
  if (!options.length)
    return (
      <EmptyState title="No one to share with"
        message="Invite people to the portal first." />
    )

  return (
    <CheckList options={options} selected={selected} onToggle={onToggle} />
  )
}

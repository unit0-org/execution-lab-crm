import { Inline } from '@/ui/layout/Inline'
import { Token } from '@/ui/molecules/Token'

// The contacts chosen so far, as removable pills. Nothing until one is
// picked.
export function InviteSelection({ picked, onRemove }) {
  if (!picked.length) return null

  return (
    <Inline gap="xs">
      {picked.map((p) => (
        <Token key={p.value} label={p.label}
          onRemove={() => onRemove(p.value)} />
      ))}
    </Inline>
  )
}

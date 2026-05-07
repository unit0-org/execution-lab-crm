import { Dot } from '@/ui/Dot'
import { Inline } from '@/ui/Inline'

const LEVELS = [1, 2, 3, 4, 5]

// Read-only for now; Phase 4 follow-up adds the click-to-set action.
export function WarmthDots({ value }) {
  return (
    <Inline gap="sm">
      {LEVELS.map((n) => <Dot key={n} size="sm" filled={value >= n} />)}
    </Inline>
  )
}

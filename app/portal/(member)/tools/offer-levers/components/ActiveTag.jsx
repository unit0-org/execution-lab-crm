import { Badge } from '@/ui/atoms/Badge'

// A small "Active" badge for a generated offer that's currently selling;
// renders nothing otherwise.
export function ActiveTag({ active }) {
  if (!active) return null

  return <Badge tone="success">Active</Badge>
}

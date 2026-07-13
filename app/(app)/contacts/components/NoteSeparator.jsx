import { Divider } from '@/ui/atoms/Divider'

// The rule between two notes — so the thread reads as one continuous list.
// The first note has nothing above it to separate from.
export function NoteSeparator({ index }) {
  if (!index) return null

  return <Divider />
}

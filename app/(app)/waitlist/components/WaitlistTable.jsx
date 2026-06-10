import { Table } from '@/ui/molecules/Table'
import { Text } from '@/ui/atoms/Text'
import { WaitlistRow } from './WaitlistRow'

const COLS = ['#', 'Name', 'Email', 'Status', 'Joined']

// The waitlist in line order; the # is the 1-based position.
export function WaitlistTable({ entries }) {
  if (entries.length === 0) {
    return <Text tone="muted">No one on the waitlist yet.</Text>
  }

  return (
    <Table cols={COLS}>
      {entries.map((entry, i) => (
        <WaitlistRow key={entry.id} entry={entry} position={i + 1} />
      ))}
    </Table>
  )
}

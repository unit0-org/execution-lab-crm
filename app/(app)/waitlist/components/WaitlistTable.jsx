'use client'

import { Table } from '@/ui/molecules/Table'
import { Text } from '@/ui/atoms/Text'
import { WaitlistRow } from './WaitlistRow'
import { WaitlistDetail } from './WaitlistDetail'
import { useWaitlistSelection } from '../hooks/useWaitlistSelection'

const COLS = ['#', 'Name', 'Email', 'Joined']

// The waitlist in line order; click a row to see what they submitted.
export function WaitlistTable({ entries, cohorts }) {
  const { selected, select, clear } = useWaitlistSelection()

  if (entries.length === 0) {
    return <Text tone="muted">No one on the waitlist yet.</Text>
  }

  return (
    <>
      <Table cols={COLS}>
        {entries.map((entry, i) => (
          <WaitlistRow key={entry.id} entry={entry} position={i + 1}
            onClick={() => select(entry)} />
        ))}
      </Table>
      <WaitlistDetail entry={selected} cohorts={cohorts} onClose={clear} />
    </>
  )
}

import { Table } from '@/ui/molecules/Table'
import { Text } from '@/ui/atoms/Text'
import { RegistrationRow } from './RegistrationRow'

const COLS = ['Name', 'Email', 'Company', 'Payment', 'Registered', '']

// The roster of registrations for a cohort, or an empty-state message.
export function RegistrationsTable({ registrations }) {
  if (registrations.length === 0) {
    return <Text tone="muted">No registrations yet.</Text>
  }

  return (
    <Table cols={COLS}>
      {registrations.map((registration) => (
        <RegistrationRow key={registration.id} registration={registration} />
      ))}
    </Table>
  )
}

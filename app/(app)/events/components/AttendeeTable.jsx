import { Table } from '@/ui/molecules/Table'
import { AttendeeRow } from './AttendeeRow'

const COLS = ['Name', 'Email', 'Status']

export function AttendeeTable({ attendees }) {
  return (
    <Table cols={COLS}>
      {attendees.map((a) => <AttendeeRow key={a.id} attendee={a} />)}
    </Table>
  )
}

import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'

// One waitlist entry: position, name, email and join date. Click the row
// to see what they submitted on the form.
export function WaitlistRow({ entry, position, onClick }) {
  const fullName = `${entry.first_name} ${entry.last_name || ''}`.trim()

  return (
    <Tr onClick={onClick}>
      <Td>{position}</Td>
      <Td truncate>{fullName}</Td>
      <Td truncate>{entry.email}</Td>
      <Td><DateText value={entry.created_at} /></Td>
    </Tr>
  )
}

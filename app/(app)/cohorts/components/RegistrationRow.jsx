import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'
import { PaymentStatus } from './PaymentStatus'
import { ContactLink } from './ContactLink'

// One registrant: name, contact details, payment state and a contact link.
export function RegistrationRow({ registration }) {
  const fullName = `${registration.first_name} ${registration.last_name}`

  return (
    <Tr>
      <Td truncate>{fullName}</Td>
      <Td truncate>{registration.email}</Td>
      <Td truncate>{registration.company}</Td>
      <Td><PaymentStatus status={registration.status} /></Td>
      <Td><DateText value={registration.created_at} /></Td>
      <Td><ContactLink contactId={registration.contact_id} /></Td>
    </Tr>
  )
}

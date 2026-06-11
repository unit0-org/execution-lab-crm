import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { RegistrantCrmLink } from './RegistrantCrmLink'
import { RegistrantAnswers } from './RegistrantAnswers'
import { RegistrantPayment } from './RegistrantPayment'

// A registrant's file within a cohort: their registration-form answers and
// payment, plus a link out to their full CRM contact page.
export function RegistrantFileView({ registration }) {
  const name = `${registration.first_name} ${registration.last_name}`

  return (
    <Stack gap="lg">
      <Heading level={1}>{name}</Heading>
      <RegistrantCrmLink contactId={registration.contact_id} />
      <RegistrantAnswers registration={registration} />
      <RegistrantPayment registration={registration} />
    </Stack>
  )
}

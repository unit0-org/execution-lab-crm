import { Text } from '@/ui/atoms/Text'
import { getCohortRegistrationAction } from
  '../../../actions/getCohortRegistration'
import { RegistrantFileView } from
  '../../../components/RegistrantFileView'

// Server-side load for one cohort registration — the registrant's file.
export async function RegistrantFileServer({ params }) {
  const { id, registrationId } = await params
  const registration = await getCohortRegistrationAction(id, registrationId)

  if (!registration) {
    return <Text>Registration not found.</Text>
  }

  return <RegistrantFileView registration={registration} />
}

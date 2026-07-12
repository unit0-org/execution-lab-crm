import { Stack } from '@/ui/layout/Stack'
import { DigestSection } from './DigestSection'
import { followUpView } from '@/lib/digest/renderer/followUpView'
import { attendeeView } from '@/lib/digest/renderer/attendeeView'
import { customerView } from '@/lib/digest/renderer/customerView'
import { birthdayView } from '@/lib/digest/renderer/birthdayView'

// The four weekly-digest sections, sharing the email's view-models.
export function DigestSections({ digest }) {
  const views = [
    followUpView(digest.followUps),
    attendeeView(digest.attendees),
    customerView(digest.newCustomers),
    birthdayView(digest.birthdays)
  ]

  return (
    <Stack gap="lg">
      {views.map((view) => (
        <DigestSection key={view.title} view={view} />
      ))}
    </Stack>
  )
}

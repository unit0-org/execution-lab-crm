import { Card } from '@/ui/atoms/Card'
import { CardGrid } from '@/ui/layout/CardGrid'
import { DigestSection } from './DigestSection'
import { followUpView } from '@/lib/digest/renderer/followUpView'
import { attendeeView } from '@/lib/digest/renderer/attendeeView'
import { customerView } from '@/lib/digest/renderer/customerView'
import { birthdayView } from '@/lib/digest/renderer/birthdayView'

// The four weekly-digest sections as a responsive grid of cards, so more
// fits above the fold. Sections share the email's view-models.
export function DigestSections({ digest }) {
  const views = [
    followUpView(digest.followUps),
    attendeeView(digest.attendees),
    customerView(digest.newCustomers),
    birthdayView(digest.birthdays)
  ]

  return (
    <CardGrid align="start">
      {views.map((view) => (
        <Card key={view.title}>
          <DigestSection view={view} />
        </Card>
      ))}
    </CardGrid>
  )
}

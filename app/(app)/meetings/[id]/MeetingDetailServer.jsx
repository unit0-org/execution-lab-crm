import { getMeetingAction } from '../actions/getMeeting'
import { MeetingDetailView } from '../components/MeetingDetailView'

// Server-side load for one meeting, seeded into the client view so it
// renders complete without a loading skeleton.
export async function MeetingDetailServer({ params }) {
  const { id } = await params
  const meeting = await getMeetingAction(id)

  return <MeetingDetailView initialMeeting={meeting} />
}

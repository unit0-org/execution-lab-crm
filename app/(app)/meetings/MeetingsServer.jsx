import { listMeetingsAction } from './actions/listMeetings'
import { MeetingsView } from './components/MeetingsView'

export async function MeetingsServer() {
  const meetings = await listMeetingsAction()

  return <MeetingsView initialMeetings={meetings} />
}

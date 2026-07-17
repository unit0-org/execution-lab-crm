import { listMeetingsAction } from './actions/listMeetings'
import { meetingSyncStatusAction } from './actions/meetingSyncStatus'
import { MeetingsView } from './components/MeetingsView'

export async function MeetingsServer() {
  const meetings = await listMeetingsAction()
  const status = await meetingSyncStatusAction()

  return (
    <MeetingsView initialMeetings={meetings}
      lastSyncedAt={status.lastSyncedAt} />
  )
}

import { listMeetingsAction } from './actions/listMeetings'
import { meetingSyncStatusAction } from './actions/meetingSyncStatus'
import { MeetingsView } from './components/MeetingsView'
import { PAGE_SIZE } from './pageSize'

export async function MeetingsServer() {
  const meetings = await listMeetingsAction(PAGE_SIZE)
  const status = await meetingSyncStatusAction()

  return (
    <MeetingsView initialMeetings={meetings}
      lastSyncedAt={status.lastSyncedAt} />
  )
}

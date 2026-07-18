import { meetingsPageAction } from './actions/meetingsPage'
import { meetingSyncStatusAction } from './actions/meetingSyncStatus'
import { MeetingsView } from './components/MeetingsView'

export async function MeetingsServer() {
  const first = await meetingsPageAction(0)
  const status = await meetingSyncStatusAction()

  return (
    <MeetingsView initialMeetings={first.meetings} total={first.total}
      lastSyncedAt={status.lastSyncedAt} />
  )
}

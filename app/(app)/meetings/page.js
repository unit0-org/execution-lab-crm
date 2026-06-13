import { Page } from '@/ui/layout/Page'
import { MeetingsServer } from './MeetingsServer'

export const dynamic = 'force-dynamic'

export default function MeetingsPage() {
  return (
    <Page width="wide">
      <MeetingsServer />
    </Page>
  )
}

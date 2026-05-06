import { Page } from '@/ui/Page'
import { LogHeader } from './components/LogHeader'
import { LogEntryForm } from './components/LogEntryForm'

export const dynamic = 'force-dynamic'

export default function LogPage() {
  return (
    <Page width="wide">
      <LogHeader />
      <LogEntryForm />
    </Page>
  )
}

import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { InvoicesView } from './components/InvoicesView'

export default function InvoicesPage() {
  return (
    <Page width="wide">
      <Suspense>
        <InvoicesView />
      </Suspense>
    </Page>
  )
}

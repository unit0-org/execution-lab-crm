import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { InvoicesServer } from './InvoicesServer'
import { InvoicesListFallback } from './components/InvoicesListFallback'

export default function InvoicesPage() {
  return (
    <Page width="wide">
      <Suspense fallback={<InvoicesListFallback />}>
        <InvoicesServer />
      </Suspense>
    </Page>
  )
}

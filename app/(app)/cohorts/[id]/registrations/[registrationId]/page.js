import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Text } from '@/ui/atoms/Text'
import { RegistrantFileServer } from './RegistrantFileServer'

export default function RegistrantPage({ params }) {
  return (
    <Page>
      <Suspense fallback={<Text>Loading…</Text>}>
        <RegistrantFileServer params={params} />
      </Suspense>
    </Page>
  )
}

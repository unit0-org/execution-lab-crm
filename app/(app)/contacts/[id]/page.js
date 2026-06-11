import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Loading } from '../components/Loading'
import { ContactDetailServer } from './ContactDetailServer'

export default function ContactPage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <Suspense fallback={<Loading />}>
          <ContactDetailServer params={params} />
        </Suspense>
      </Stack>
    </Page>
  )
}

import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { ContactDetailServer } from './ContactDetailServer'
import { EmailInUseNotice } from './EmailInUseNotice'

export default function ContactPage({ params, searchParams }) {
  return (
    <Page>
      <Stack gap="md">
        <EmailInUseNotice searchParams={searchParams} />
        <ContactDetailServer params={params} />
      </Stack>
    </Page>
  )
}

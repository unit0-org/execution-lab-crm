import { Page } from '@/ui/layout/Page'
import { RegistrantFileServer } from './RegistrantFileServer'

export default function RegistrantPage({ params }) {
  return (
    <Page>
      <RegistrantFileServer params={params} />
    </Page>
  )
}

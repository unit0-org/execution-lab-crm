import { Page } from '@/ui/layout/Page'
import { CompanyDetailServer } from './CompanyDetailServer'

export default function CompanyPage({ params }) {
  return (
    <Page>
      <CompanyDetailServer params={params} />
    </Page>
  )
}

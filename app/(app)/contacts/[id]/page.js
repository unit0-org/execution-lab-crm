import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { getPersonPageData } from './queries/getPersonPageData'
import { PersonHeader } from './components/PersonHeader'
import { PersonLayout } from './components/PersonLayout'
import { PersonLeft } from './components/PersonLeft'
import { PersonRight } from './components/PersonRight'

export const dynamic = 'force-dynamic'

export default async function PersonDetailPage({ params }) {
  const { id } = await params
  const supabase = await createClient()
  const data = await getPersonPageData(supabase, id)
  if (!data) notFound()

  return (
    <Page width="wide">
      <PersonHeader person={data.person} labels={data.extras.labels} />
      <PersonLayout
        left={<PersonLeft contactId={id} timeline={data.timeline} notes={data.notes} />}
        right={<PersonRight contactId={id} person={data.person} resources={data.resources} />}
      />
    </Page>
  )
}

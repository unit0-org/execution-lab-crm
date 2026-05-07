import { createClient } from '@/lib/supabase/server'
import { fetchContactTypes } from '@/lib/contact_types/queries'
import { Page } from '@/ui/Page'
import { Stack } from '@/ui/Stack'
import { TypesHeader } from './components/TypesHeader'
import { CreateSection } from './components/CreateSection'
import { AllTypesSection } from './components/AllTypesSection'

export const dynamic = 'force-dynamic'

export default async function ContactTypesPage() {
  const supabase = await createClient()
  const types = await fetchContactTypes(supabase)
  return (
    <Page width="wide">
      <TypesHeader />
      <Stack gap="lg">
        <CreateSection />
        <AllTypesSection types={types} />
      </Stack>
    </Page>
  )
}

import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { PurchasesServer } from './PurchasesServer'

export default function PurchasesPage({ searchParams }) {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Purchases</Heading>
        <PurchasesServer searchParams={searchParams} />
      </Stack>
    </Page>
  )
}

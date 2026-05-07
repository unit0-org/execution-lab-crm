import { Page } from '@/ui/Page'
import { Skeleton } from '@/ui/Skeleton'

export default function Loading() {
  return (
    <Page width="wide">
      <Skeleton lines={6} />
    </Page>
  )
}

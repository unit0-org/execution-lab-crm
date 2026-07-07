import { Page } from '@/ui/layout/Page'
import framework from '../data/framework.json'
import { leverSlug } from '../leverSlug'
import { LeverPageServer } from './LeverPageServer'

export function generateStaticParams() {
  return framework.levers.map((l) => ({ lever: leverSlug(l.id) }))
}

export default function LeverRoutePage({ params }) {
  return (
    <Page width="narrow">
      <LeverPageServer params={params} />
    </Page>
  )
}

import { notFound } from 'next/navigation'
import framework from '../data/framework.json'
import { leverSlug } from '../leverSlug'
import { LeverPageView } from '../components/LeverPageView'

// Resolve the lever from the URL slug; 404 for an unknown slug.
export async function LeverPageServer({ params }) {
  const { lever: slug } = await params
  const lever = framework.levers.find((l) => leverSlug(l.id) === slug)

  if (!lever) notFound()

  return <LeverPageView lever={lever} />
}

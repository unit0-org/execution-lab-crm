import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getPerson } from '@/app/(app)/contacts/[id]/queries/getPerson'
import { getTimeline } from '@/app/(app)/contacts/[id]/queries/getTimeline'
import { buildContextBundle } from '@/lib/ai/contextBundle'

export const dynamic = 'force-dynamic'

export async function GET(_request, { params }) {
  const { id } = await params
  const supabase = await createClient()
  const person = await getPerson(supabase, id)
  if (!person) return NextResponse.json({ error: 'not found' }, { status: 404 })
  const timeline = await getTimeline(supabase, id)

  return NextResponse.json({ markdown: buildContextBundle({ person, timeline }) })
}

import { fetchInteraction } from '@/lib/interactions/queries'
import { buildExtractionInput } from './buildInput'
import { callExtractionModel } from './callModel'
import { persistExtractedCards } from './persistCards'

const stamp = () => new Date().toISOString()

export async function runExtraction(supabase, meetingId) {
  const meeting = await fetchInteraction(supabase, meetingId)
  if (!meeting || meeting.extracted_at) return { skipped: 'already-extracted' }
  const input = await buildExtractionInput(supabase, meeting)
  if (!input) return { skipped: 'no-input' }

  const extracted = await callExtractionModel(input)
  await persistExtractedCards(supabase, input, extracted)
  await supabase.from('meetings').update({ extracted_at: stamp() }).eq('id', meetingId)

  return { ok: true }
}

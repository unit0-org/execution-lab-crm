'use client'

import { useMeeting } from '../hooks/useMeeting'
import { MeetingDetail } from './MeetingDetail'
import { MeetingNotFound } from './MeetingNotFound'

export function MeetingDetailView({ initialMeeting }) {
  const seed = initialMeeting
  const { meeting, refresh } = useMeeting(seed?.id, seed)

  if (meeting === null) return <MeetingNotFound />

  return <MeetingDetail meeting={meeting} onChanged={refresh} />
}

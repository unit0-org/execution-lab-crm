'use client'

import { useParams } from 'next/navigation'
import { useMeeting } from '../hooks/useMeeting'
import { MeetingDetail } from './MeetingDetail'
import { MeetingLoading } from './MeetingLoading'
import { MeetingNotFound } from './MeetingNotFound'

export function MeetingDetailView() {
  const { id } = useParams()
  const { meeting, refresh } = useMeeting(id)

  if (meeting === undefined) return <MeetingLoading />

  if (meeting === null) return <MeetingNotFound />

  return <MeetingDetail meeting={meeting} onChanged={refresh} />
}

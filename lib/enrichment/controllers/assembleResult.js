// Shape the apply_meeting_enrichment return from the gathered pieces.
export function assembleResult(meeting, people, counts, transcript) {
  return {
    meetingId: meeting.id,
    meetingCreated: meeting.created,
    contacts: people.byRef,
    applied: {
      ...people.applied,
      meetingNotes: counts.meetingNotes,
      relationships: counts.relationships
    },
    transcriptAttached: transcript.attached
  }
}

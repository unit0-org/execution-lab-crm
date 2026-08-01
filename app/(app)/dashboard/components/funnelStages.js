// The three stages, in order. Captions say what each number means, since
// "nurturing" is a rule (any touch after the event) rather than a status
// anyone sets by hand.
export function funnelStages({ stages, participants }) {
  return [
    {
      label: '1 · Attended',
      value: stages.attended,
      tone: 'cold',
      caption: `unique people · ${participants} check-ins`
    },
    {
      label: '2 · Nurturing',
      value: stages.nurturing,
      tone: 'cool',
      caption: 'a note, meeting, email, purchase or another event since'
    },
    {
      label: '3 · Clients',
      value: stages.clients,
      tone: 'warm',
      caption: 'became a client after attending'
    }
  ]
}

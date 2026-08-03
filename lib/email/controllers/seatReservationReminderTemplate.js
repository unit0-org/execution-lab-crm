// The one nudge a reserved seat gets before its hold runs out, sent a
// couple of days ahead so the deadline never arrives unannounced. Distinct
// from payment_followup, which chases an abandoned self-serve checkout and
// talks about a 2-hour hold.
export const SEAT_RESERVATION_REMINDER = {
  template_key: 'seat_reservation_reminder',
  subject: 'Your {{cohort_name}} seat is held until {{release_date}}',
  body: [
    'Hi {{first_name}},',
    'A quick reminder that the seat we reserved for you on ' +
      '{{cohort_name}} is held until {{release_date}}. After that it is ' +
      'released for someone else.',
    'Complete your registration here:\n{{register_url}}',
    'The Execution Lab'
  ].join('\n\n')
}

// Default email to a portal member an offer was shared with.
export const OFFER_SHARED = {
  template_key: 'offer_shared',
  subject: '{{actor_name}} shared {{offer_name}} with you',
  body: [
    'Hi,',
    '{{actor_name}} shared the offer {{offer_name}} with you.',
    'You can read it and join the discussion:\n{{offer_url}}',
    'The Execution Lab'
  ].join('\n\n')
}

// Default email to a member who was @-mentioned in a contact note.
export const MENTION_NOTIFICATION = {
  template_key: 'mention_notification',
  subject: '{{actor_name}} mentioned you on {{contact_name}}',
  body: [
    'Hi,',
    '{{actor_name}} mentioned you in a note on {{contact_name}}:',
    '{{note_excerpt}}',
    'Open it:\n{{note_url}}',
    'The Execution Lab'
  ].join('\n\n')
}

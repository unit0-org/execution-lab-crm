// Default email to a portal member @-mentioned in an offer comment.
export const OFFER_COMMENT_MENTION = {
  template_key: 'offer_comment_mention',
  subject: '{{actor_name}} mentioned you on {{offer_name}}',
  body: [
    'Hi,',
    '{{actor_name}} mentioned you in a comment on {{offer_name}}:',
    '{{comment_excerpt}}',
    'Open it:\n{{offer_url}}',
    'The Execution Lab'
  ].join('\n\n')
}

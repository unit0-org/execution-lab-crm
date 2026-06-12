// Default invoice email, sent to the client with the PDF attached.
export const INVOICE = {
  template_key: 'invoice',
  subject: 'Invoice {{number}}',
  body: [
    'Hi,',
    'Please find invoice {{number}} attached — amount due {{total}}.',
    'Thank you,\nThe Execution Lab'
  ].join('\n\n')
}

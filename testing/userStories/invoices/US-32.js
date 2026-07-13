const userStory = {
  id: 'US-32',
  implemented: 'partial',
  gaps: [
    "Re-approving a paid invoice doesn't reset it back to " +
      'approved.'
  ],
  role: 'Staff',
  title: 'Move an invoice through its lifecycle',
  story:
    'As a staff member, I can take an invoice from draft to approved to ' +
    'sent to paid (or void it), so that its state reflects reality.',
  behaviours: [
    'A draft can\'t be sent ("approve first"); a void can\'t be sent ' +
      'either.',
    'Approved, sent and paid invoices can all be re-sent (receipt resend), ' +
      'and a paid invoice stays paid.',
    'Voiding keeps the record and hides it from the member; deleting ' +
      'removes it permanently.',
    "Re-approving a paid invoice doesn't reset it back to approved."
  ]
};

export default userStory;

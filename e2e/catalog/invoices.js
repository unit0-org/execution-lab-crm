// User stories mirrored from the Feature Spec artifact (domain: Invoices).

export const domain = {
  code: 'INV',
  id: 'invoices',
  title: 'Invoices & Payments'
};

export const stories = [
  {
    id: 'US-31',
    role: 'Staff',
    title: 'Create an invoice with line items',
    story:
      'As a staff member, I can build an invoice with line items and ' +
      'correct totals, so that I can bill a client.',
    behaviours: [
      'Invoice numbers are sequential and unique per organization; the same ' +
        'number may exist in another org.',
      'Totals compute as subtotal + rounded tax; zero tax means total ' +
        'equals subtotal.',
      'Amounts entered as text parse sensibly ("$1,250.00", "99.99"), strip ' +
        'negatives, and treat garbage as 0.',
      'Two invoices reserving a number at the same instant get distinct ' +
        'numbers.'
    ]
  },
  {
    id: 'US-32',
    role: 'Staff',
    title: 'Move an invoice through its lifecycle',
    story:
      'As a staff member, I can take an invoice from draft to approved to ' +
      'sent to paid (or void it), so that its state reflects reality.',
    behaviours: [
      'A draft can\'t be sent ("approve first"); a void can\'t be sent ' +
        'either.',
      'Approved, sent and paid invoices can all be re-sent (receipt ' +
        'resend), and a paid invoice stays paid.',
      'Voiding keeps the record and hides it from the member; deleting ' +
        'removes it permanently.',
      "Re-approving a paid invoice doesn't reset it back to approved."
    ]
  },
  {
    id: 'US-33',
    role: 'System',
    guarantee: true,
    title: 'Every invoice email CCs the office, once',
    story:
      'As the business, I need a copy of every outgoing invoice, without ' +
      'ever double-CCing, so that we keep a reliable billing trail.',
    behaviours: [
      'The office address is added as CC on every send.',
      "It's not added twice if the recipient or existing CC already " +
        'includes it (case-insensitive).',
      'This works whether CC is a single address or a list.'
    ]
  },
  {
    id: 'US-34',
    role: 'System',
    title: 'Auto-invoice a Stripe purchase',
    story:
      'As the system, I turn a completed Stripe charge into a paid receipt, ' +
      'so that customers get billing without manual work.',
    behaviours: [
      'A receipt is created only when auto-create is on, then approved, ' +
        'marked paid, and optionally sent.',
      'A duplicate charge notification returns the existing invoice rather ' +
        'than making a second.',
      'Two charges in the same second get distinct receipt numbers.'
    ]
  },
  {
    id: 'US-35',
    role: 'System',
    title: 'Sync purchases & classify customers',
    story:
      'As the system, I pull Stripe purchases and decide who’s a customer, ' +
      'so that the pipeline separates leads from paying customers.',
    behaviours: [
      'A contact is a customer if any single purchase is $100+ or they have ' +
        'any paid registration.',
      'A comped ($0) seat still makes someone a customer; $99.99 alone stays ' +
        'a lead.',
      'A charge with no email is skipped; re-syncing refreshes a purchase ' +
        '(e.g. to refunded).',
      'Refunds are counted consistently across every revenue figure.'
    ]
  },
  {
    id: 'US-36',
    role: 'Admin',
    title: 'Manage company & invoice settings',
    story:
      'As an admin, I can set company details, invoice defaults and ' +
      'connected accounts, so that billing matches our brand and process.',
    behaviours: [
      'Only admins can change settings; auto-create defaults on and the ' +
        'number prefix defaults to "INV-".',
      'Exactly one Google account is primary at a time.',
      'Email templates are shared globally and seeded on first use.'
    ]
  }
];

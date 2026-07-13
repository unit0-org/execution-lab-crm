// User stories mirrored from the Feature Spec artifact (domain: Cohorts).

export const domain = {
  code: 'COH',
  id: 'cohorts',
  title: 'Cohorts & Registration'
};

export const stories = [
  {
    id: 'US-13',
    role: 'Client',
    title: 'Register and pay for a cohort',
    story:
      'As a prospective client, I can fill in the form and pay for a seat, ' +
      "so that I'm enrolled in a program.",
    behaviours: [
      'All required fields (email, LinkedIn, business, stage, obstacle, ' +
        'commitment, name) must be filled; blank-only fields count as empty.',
      'A full cohort sends me to the waitlist unless I hold a valid invite ' +
        'link.',
      'My registration, contact and facts are saved before payment — even ' +
        'if I never pay.',
      'My seat is held for 2 hours while I complete checkout.'
    ]
  },
  {
    id: 'US-14',
    role: 'System',
    guarantee: true,
    title: '"A taken seat" means the same thing everywhere',
    story:
      'As the business, I need every count of taken seats to agree, so that ' +
      'capacity, "sold out", stats and the waitlist never disagree.',
    behaviours: [
      "A seat counts as taken when it's paid, or pending within its 2-hour " +
        'hold.',
      'When a hold lapses, the seat frees up in every screen at the same ' +
        'instant.',
      'A manually-marked-paid seat counts as filled but adds $0 revenue.',
      "A registration paid after its hold lapsed doesn't silently overfill " +
        'the cohort.'
    ]
  },
  {
    id: 'US-15',
    role: 'System',
    guarantee: true,
    title: 'One discount applies — never stacked',
    story:
      'As the business, I need exactly one discount to apply per ' +
      'registration, resolved the same way for the price shown and the ' +
      'price charged, so that pricing is predictable.',
    behaviours: [
      "Precedence is: a customer's own code, then an earned reward, then " +
        "the cohort's preset, then none.",
      'An invalid customer code falls back to the earned reward — not to ' +
        'full price.',
      'The struck-through "was" price only appears when the discount ' +
        'actually lowers the price.',
      "The price shown on the card matches what's charged at checkout."
    ]
  },
  {
    id: 'US-16',
    role: 'Client',
    title: 'Earn early-bird / pre-registration pricing',
    story:
      'As a prospective client, I can earn a lower price for signing up ' +
      'early, so that acting fast is rewarded.',
    behaviours: [
      'Pre-registration pricing applies during the waitlist phase; ' +
        'early-bird applies to the first two in-window seats.',
      'The reward is locked to when I registered — paying later still ' +
        'honours it.',
      "Lapsed holds don't use up the early-bird allowance."
    ]
  },
  {
    id: 'US-17',
    role: 'System',
    title: 'Confirm a paid checkout',
    story:
      'As the system, I confirm a registration when Stripe reports payment, ' +
      'so that enrolment, emails and waitlist all follow automatically.',
    behaviours: [
      'A replayed or duplicate payment notification does nothing the second ' +
        'time.',
      'An unknown checkout is ignored; a missing or invalid signature is ' +
        'rejected.',
      'Confirmation email and waitlist conversion are best-effort — a ' +
        'failure there never undoes the payment.'
    ]
  },
  {
    id: 'US-18',
    role: 'System',
    guarantee: true,
    title: 'Registration details flow to the contact',
    story:
      'As the business, I need what someone enters when registering to land ' +
      'on their CRM contact, so that the CRM stays the single source of ' +
      'truth.',
    behaviours: [
      'Identity (email, phone, LinkedIn) updates contact fields; everything ' +
        'else becomes facts.',
      'Running the sync again never creates duplicates.',
      'The contact is tagged with the cohort.',
      'Every new registration field flows through this sync to the contact.'
    ]
  },
  {
    id: 'US-19',
    role: 'Staff',
    title: 'Send payment reminders & follow-ups',
    story:
      "As a staff member, I can nudge people who registered but haven't " +
      'paid, so that fewer seats are left unpaid.',
    behaviours: [
      'A reminder skips anyone who has already paid.',
      'The daily follow-up targets unpaid registrations 1–14 days old, once ' +
        'each.',
      'A resumed pay link mints a fresh checkout each visit.',
      'The daily follow-up re-checks payment so it never emails someone who ' +
        'just paid.'
    ]
  },
  {
    id: 'US-20',
    role: 'Client',
    title: 'Join the waitlist and get invited',
    story:
      'As a prospective client, I can join a waitlist and be invited when a ' +
      "seat opens, so that I'm not shut out of a full program.",
    behaviours: [
      'One waitlist entry per email; joining twice updates rather than ' +
        'duplicating.',
      'Only one person holds an invite at a time; it expires after 24 hours.',
      'A valid invite link lets me register even when the cohort looks full ' +
        'or closed.',
      'Two people are never invited to the same opening at once, even under ' +
        'load.'
    ]
  },
  {
    id: 'US-21',
    role: 'Staff',
    title: 'Manage cohorts, status & resources',
    story:
      'As a staff member, I can create and edit cohorts, open/close them, ' +
      'and attach resources, so that programs run on schedule.',
    behaviours: [
      'A cohort needs a name and start date; the open date must be before ' +
        'the close date.',
      'Only "open" cohorts take registrations or advance the waitlist.',
      "Members see a cohort's resources only if they hold a confirmed seat; " +
        'recordings embed as video.',
      'A cohort can be created with a capacity of exactly 0.'
    ]
  },
  {
    id: 'US-22',
    role: 'Client',
    title: 'Browse programs on the public site',
    story:
      'As a prospective client, I can browse programs with correct pricing ' +
      'and availability, so that I can choose one to join.',
    behaviours: [
      'A sold-out cohort still shows during a grace period after it starts.',
      'The featured spot picks the first buyable cohort, else the first ' +
        'sold-out one.',
      'A discount code in the link carries through to checkout; an invalid ' +
        'one is silently dropped.'
    ]
  }
];

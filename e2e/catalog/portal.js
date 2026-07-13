// User stories mirrored from the Feature Spec artifact (domain: Member Portal).

export const domain = { code: 'POR', id: 'portal', title: 'Member Portal' };

export const stories = [
  {
    id: 'US-23',
    role: 'System',
    guarantee: true,
    title: 'Staff and member areas each guard themselves',
    story:
      'As the business, I need the back office and the member area to each ' +
      'require their own membership, so that one kind of session can never ' +
      'wander into the other.',
    behaviours: [
      "A staff session can't reach any member page, and a member session " +
        "can't reach any back-office page.",
      'A revoked member is blocked on every member sub-page, not just the ' +
        'landing one.',
      'The gate holds whether the portal runs on its own subdomain or under ' +
        'a path.'
    ]
  },
  {
    id: 'US-24',
    role: 'Member',
    title: 'Sign in with a magic link',
    story:
      'As a member, I can sign in with an email magic link, so that I reach ' +
      'my portal without a password.',
    behaviours: [
      'Sign-in is email-only — no Google or password.',
      'Anyone can request a link, but without membership every page bounces ' +
        'back to sign-in.',
      'A failed sign-in returns to the portal sign-in page, not the staff ' +
        'login.'
    ]
  },
  {
    id: 'US-25',
    role: 'Member',
    title: 'Access resources for my cohorts',
    story:
      'As a member, I can open the materials for the cohorts I’m in, so ' +
      'that I get what I paid for.',
    behaviours: [
      'A member sees resources for cohorts where they hold a confirmed seat ' +
        '(pending or paid); an owner sees all.',
      'Recordings play as embedded video; other links open normally.',
      'If a hold lapses and the seat is lost, resource access is lost too.'
    ]
  },
  {
    id: 'US-26',
    role: 'Member',
    title: 'View and download my invoices',
    story:
      'As a member, I can see and download my invoices, so that I have my ' +
      'billing records.',
    behaviours: [
      'Only approved, sent or paid invoices appear — never drafts or voids.',
      'Each invoice offers a PDF download.',
      "Only the invoice's owner (or staff) can open its PDF — a guessed " +
        'link is refused.'
    ]
  },
  {
    id: 'US-27',
    role: 'Member',
    title: "Use the tools I've been granted",
    story:
      "As a member, I can use the portal tools I've been given access to, " +
      'so that I get the extras included with my membership.',
    behaviours: [
      "Each tool page re-checks my grant; without it I'm sent back to the " +
        'tools list.',
      'An owner can open any tool.',
      'A tool that no longer exists is silently dropped from my access.'
    ]
  },
  {
    id: 'US-28',
    role: 'Admin',
    title: 'Invite and revoke portal members',
    story:
      'As an admin, I can invite people to the portal and revoke them, and ' +
      'grant tools, so that I control who gets access.',
    behaviours: [
      'Inviting requires the contact to have an email.',
      'Re-inviting a revoked member sets them back to invited.',
      "Non-admins can't invite, revoke or toggle tools; an unknown tool key " +
        'is rejected.'
    ]
  },
  {
    id: 'US-29',
    role: 'Owner',
    title: 'Have full access to everything',
    story:
      'As an owner, I can open every cohort and every tool, so that I can ' +
      'support and demo the whole portal.',
    behaviours: [
      'An allow-listed owner email unlocks all resources and tools without ' +
        'needing a membership record.',
      'An owner with no matching contact still loads billing empty — no ' +
        'crash.'
    ]
  },
  {
    id: 'US-30',
    role: 'Reference',
    title: 'The full authorization matrix',
    story:
      'As the business, I want one table showing what each kind of visitor ' +
      'can reach, so that the access rules are clear.',
    behaviours: [
      'Each row is a behaviour to verify, including the revoked-by-URL and ' +
        'staff↔portal crossovers.',
      'The invoice-PDF column is restricted to the owner or staff in every ' +
        'row.'
    ]
  }
];

// The events an automation can fire on. `wired` marks triggers whose
// dispatch bridge exists; the builder only offers those. `config` names the
// extra filter field the builder shows (today: a category picker).
export const TRIGGERS = [
  { value: 'contact_created', label: 'a contact is created', wired: true },
  { value: 'category_added', label: 'a category is added',
    config: 'category', wired: true },
  { value: 'waitlist_joined', label: 'someone joins the waitlist',
    wired: true },
  { value: 'registration_paid', label: 'a registration is paid' },
  { value: 'note_added', label: 'a note is added to a contact' },
  { value: 'luma_subscriber', label: 'a new Luma subscriber joins' },
  { value: 'event_registered', label: 'someone registers for an event' },
  { value: 'purchase_made', label: 'a purchase is made' },
  { value: 'contact_birthday', label: "it's a contact's birthday" }
]

export const wiredTriggers = () => TRIGGERS.filter((t) => t.wired)

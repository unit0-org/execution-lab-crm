const userStory = {
  id: 'US-67',
  implemented: true,
  role: 'Staff',
  title: 'Reserve a Fundamentals seat for someone',
  story:
    'As a staff member, I can reserve a seat on a specific Fundamentals ' +
    'cohort, so that a place is genuinely held while they finish ' +
    'registering — and released automatically if they don\'t.',
  behaviours: [
    'I reserve a seat by name and email, picking a contact or a new person.',
    'The seat is taken the instant I reserve it, like a paid one.',
    'A full cohort refuses the reservation and tells me why.',
    'Reserving someone who holds a seat reuses it; a paid one is refused.',
    'They are emailed a link to complete, with the release date.',
    'That link prefills the form and carries them into payment.',
    'The hold is 7 days from when I reserved, not the self-serve 2 hours.',
    'Completing the form later does not shorten or restart the hold.',
    'After 7 days it lapses on its own and the seat frees up everywhere.',
    'The roster tells a reserved seat apart and shows when its hold ends.',
    'Reserving creates or matches the CRM contact and tags the cohort.',
    'Paying converts it to an ordinary paid seat, same emails and revenue.',
    'I can edit the email — recipient, subject, message — before it sends.',
    'Its default wording is an editable template like every other one.',
    'Reminded once 2 days out; never chased by the unpaid follow-up.',
    'I can cancel a reservation, releasing the seat after a confirm.'
  ]
};

export default userStory;

// Personalized confirmation copy, gracefully blank when Stripe gives us
// no name or email.
export function greetingText(name) {
  if (!name) return 'Thanks for registering.'

  return `Thanks for registering, ${name}.`
}

export function emailNote(email) {
  if (!email) return 'A confirmation email is on its way.'

  return `A confirmation email is on its way to ${email}.`
}

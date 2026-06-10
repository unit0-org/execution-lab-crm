const FALLBACK = 'The Execution Lab <hello@theexecutionlab.ca>'

// The verified Resend sender. Set REGISTRATION_EMAIL_FROM to a
// Resend-verified address; otherwise we fall back to the default.
export function fromLine() {
  return process.env.REGISTRATION_EMAIL_FROM || FALLBACK
}

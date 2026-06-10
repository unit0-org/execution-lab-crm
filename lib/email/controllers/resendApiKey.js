// The platform-wide Resend API key, from the environment.
export function resendApiKey() {
  return process.env.RESEND_API_KEY || null
}

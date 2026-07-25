// The local stack's mail catcher. Only mail GoTrue itself sends lands here,
// which is exactly what "the member is not emailed" has to be checked
// against — a confirmation mail would show up as a message to their address.
export function mailUrl() {
  return process.env.E2E_MAIL_URL;
}

export async function messagesFor(email) {
  const query = encodeURIComponent(`to:${email}`);
  const response = await fetch(`${mailUrl()}/api/v1/search?query=${query}`);

  if (!response.ok) throw new Error(`Mail catcher: ${response.status}`);

  const body = await response.json();

  return body.messages || [];
}

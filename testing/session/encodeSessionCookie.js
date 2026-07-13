// @supabase/ssr stores the session as "base64-" + base64url(JSON), split into
// .0/.1 chunks when it would exceed the browser's cookie size limit.
const MAX_CHUNK = 3180;

function base64url(text) {
  return Buffer.from(text, 'utf8').toString('base64url');
}

export function encodeSessionCookie(session) {
  return `base64-${base64url(JSON.stringify(session))}`;
}

export function chunkCookie(name, value) {
  if (value.length <= MAX_CHUNK) return [{ name, value }];

  const parts = [];

  for (let at = 0, index = 0; at < value.length; at += MAX_CHUNK, index += 1) {
    parts.push({
      name: `${name}.${index}`,
      value: value.slice(at, at + MAX_CHUNK)
    });
  }

  return parts;
}

function unquote(value) {
  const quoted = value.startsWith('"') && value.endsWith('"');

  return quoted ? value.slice(1, -1) : value;
}

function readPair(line) {
  const separator = line.indexOf('=');

  if (separator === -1) return null;

  return {
    key: line.slice(0, separator).trim(),
    value: unquote(line.slice(separator + 1).trim())
  };
}

export function parseEnvFile(text) {
  const pairs = {};

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    const pair = line && !line.startsWith('#') ? readPair(line) : null;

    if (pair) pairs[pair.key] = pair.value;
  }

  return pairs;
}

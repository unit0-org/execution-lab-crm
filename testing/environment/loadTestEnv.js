import { readFileSync, existsSync } from 'node:fs';
import { parseEnvFile } from './parseEnvFile.js';
import { testEnvPath } from './envPath.js';

// Loads .env.test if present, never overriding an already-set value. Safe at
// config-load time: listing tests must work without credentials.
export function loadTestEnv() {
  if (!existsSync(testEnvPath)) return {};

  const pairs = parseEnvFile(readFileSync(testEnvPath, 'utf8'));

  for (const [key, value] of Object.entries(pairs)) {
    if (process.env[key] === undefined) process.env[key] = value;
  }

  return pairs;
}

import packageJson from '@/package.json'

export function useEnvironment() {
  return {
    name: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown',
    version: packageJson.version,
  }
}

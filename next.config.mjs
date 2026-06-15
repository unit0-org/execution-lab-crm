/** @type {import('next').NextConfig} */

// Content-Security-Policy. Kept conservative so it hardens without
// breaking the app: framing is denied, base-uri/object-src locked down,
// and form/connect targets are limited to our own origin plus the Google
// OAuth + Supabase endpoints the auth flow needs. `script-src` keeps
// 'unsafe-inline' because the app ships inline bootstrap/theme scripts;
// tightening it to a nonce is a follow-up.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "form-action 'self' https://accounts.google.com",
  "frame-src 'self' https://accounts.google.com",
  "connect-src 'self' https://*.supabase.co " +
    'https://accounts.google.com https://*.googleapis.com'
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

const nextConfig = {
  // Don't advertise the framework to fingerprinting tools.
  poweredByHeader: false,
  experimental: { authInterrupts: true },
  serverExternalPackages: ['sequelize', 'pg'],
  outputFileTracingIncludes: {
    '/api/invoices/**': ['./lib/invoice/pdf/fonts/**']
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  }
};

export default nextConfig;

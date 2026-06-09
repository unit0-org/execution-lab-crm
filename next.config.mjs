/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { authInterrupts: true },
  serverExternalPackages: ['sequelize', 'pg'],
  outputFileTracingIncludes: {
    '/api/invoices/**': ['./lib/invoice/pdf/fonts/**']
  }
};

export default nextConfig;

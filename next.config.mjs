/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['sequelize', 'pg'],
  outputFileTracingIncludes: {
    '/api/invoices/**': ['./lib/invoice/pdf/fonts/**']
  }
};

export default nextConfig;

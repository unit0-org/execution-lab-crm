import { syncPurchases } from '@/lib/purchase/controllers/syncPurchases'

export const runtime = 'nodejs'
export const maxDuration = 300

// Vercel Cron hits this daily; back-fill purchases from Stripe.
export async function GET(request) {
  const auth = request.headers.get('authorization')

  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  return Response.json(await syncPurchases())
}

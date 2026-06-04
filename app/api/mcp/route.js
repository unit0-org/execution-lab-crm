import { authedHandler } from '@/lib/mcp/authedHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = authedHandler
export const POST = authedHandler

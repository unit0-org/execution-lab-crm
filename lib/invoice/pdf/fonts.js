// The brand fonts now live in the shared lib/pdf module (every branded PDF
// embeds the same set). Re-exported here so the invoice pipeline is unchanged.
export { embedFonts } from '@/lib/pdf/brandFonts'

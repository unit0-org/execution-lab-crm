// A safe download filename for an offer PDF: the offer name slugified (or a
// fallback), always ending in .pdf.
export function offerPdfFileName(name) {
  const base = (name || 'offer').trim().replace(/[^\w.-]+/g, '-')

  return `${base || 'offer'}.pdf`
}

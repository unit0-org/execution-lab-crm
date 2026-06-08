// The invoice is drawn in the design template's px space (US Letter at
// 96dpi) and scaled to points on render — see renderInvoicePdf.
export const page = { width: 816, height: 1056 }

export const margin = 64

export const contentRight = page.width - margin

export const contentWidth = page.width - margin * 2

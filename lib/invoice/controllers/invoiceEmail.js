const fromLine = (setting) => {
  const name = setting.from_name || 'Invoices'
  const email = setting.from_email || 'invoices@example.com'

  return `${name} <${email}>`
}

const body = (invoice, url) => {
  const link = url ? `<p><a href="${url}">View invoice</a></p>` : ''

  return `<p>Please find invoice ${invoice.number} attached.</p>${link}`
}

// Shape the Resend payload for an invoice email with the PDF attached.
export function invoiceEmail(invoice, setting, pdf, url, to) {
  return {
    from: fromLine(setting),
    to,
    subject: `Invoice ${invoice.number}`,
    html: body(invoice, url),
    attachments: [{
      filename: `${invoice.number}.pdf`,
      content: pdf.toString('base64')
    }]
  }
}

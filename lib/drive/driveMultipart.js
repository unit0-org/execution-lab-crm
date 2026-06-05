const BOUNDARY = 'invoicepdfboundary'

const header = (meta) => `--${BOUNDARY}\r\n`
  + 'Content-Type: application/json; charset=UTF-8\r\n\r\n'
  + `${JSON.stringify(meta)}\r\n--${BOUNDARY}\r\n`
  + 'Content-Type: application/pdf\r\n\r\n'

// Build a multipart/related body that uploads a PDF into a folder.
export function driveMultipart(name, folderId, pdf) {
  const meta = { name, parents: [folderId], mimeType: 'application/pdf' }
  const body = Buffer.concat([
    Buffer.from(header(meta)),
    pdf,
    Buffer.from(`\r\n--${BOUNDARY}--`)
  ])

  return { body, boundary: BOUNDARY }
}

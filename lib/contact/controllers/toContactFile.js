// Shape a contact_file row for the client: metadata plus a fresh signed
// download URL, looked up by object key in the batch result.
export function toContactFile(row, urls) {
  return {
    id: row.id,
    fileName: row.file_name,
    mimeType: row.mime_type,
    sizeBytes: row.size_bytes,
    createdAt: row.created_at,
    downloadUrl: urls.get(row.bucket_path) || null
  }
}

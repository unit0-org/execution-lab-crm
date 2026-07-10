// The private Supabase Storage bucket holding contact attachments. Bytes
// live here, never in Postgres; access is via short-lived signed URLs.
export const CONTACT_FILE_BUCKET = 'contact-file'

// Short time-to-live (seconds) for a signed download URL.
export const DOWNLOAD_URL_TTL_SECONDS = 300

// Luma names guest exports "<Event title> - Guests - <timestamp>.csv".
// Pull the event title back out of that file name.
export function eventTitleFromFileName(fileName) {
  const base = fileName.replace(/^.*\//, '').replace(/\.csv$/i, '')

  return base.replace(/ - Guests - [\d-]+$/, '').trim()
}

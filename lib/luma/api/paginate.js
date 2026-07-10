// Walk Luma's cursor pagination, collecting every page's `entries`.
// `fetchPage(cursor)` returns { entries, has_more, next_cursor }.
export async function collectPages(fetchPage) {
  const all = []
  let cursor = null

  do {
    const page = await fetchPage(cursor)

    all.push(...(page.entries || []))
    cursor = page.has_more ? page.next_cursor : null
  } while (cursor)

  return all
}

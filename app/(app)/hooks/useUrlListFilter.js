'use client'

import { useRouter } from 'next/navigation'

const toggled = (list, value) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value]

function urlWith(params) {
  const url = new URL(window.location.href)

  for (const [name, values] of Object.entries(params)) {
    if (values.length) url.searchParams.set(name, values.join(','))
    else url.searchParams.delete(name)
  }

  return `${url.pathname}${url.search}`
}

// Comma-separated list params held in the URL. Toggling one navigates, so
// the server re-queries — these filters can't be applied client-side.
// Every other query param on the page is left alone, so one filter never
// clears another's selection.
export function useUrlListFilter(current) {
  const router = useRouter()

  return (name, value) =>
    router.push(urlWith({ ...current, [name]: toggled(current[name], value) }))
}

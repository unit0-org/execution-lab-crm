import { renderRow } from './renderRow'

const list = (rows) =>
  `<ul style="padding-left:18px;margin:8px 0">${rows.join('')}</ul>`

const emptyLine = (text) =>
  `<p style="color:#666;margin:8px 0">${text}</p>`

const heading = (title) =>
  `<h2 style="font-size:16px;margin:20px 0 4px">${title}</h2>`

// A titled digest section: its heading over the rows, or a neutral empty
// line when nothing qualified this week.
export function renderSection({ title, rows, emptyText }) {
  const body = rows.length ? list(rows.map(renderRow)) : emptyLine(emptyText)

  return `${heading(title)}${body}`
}

// Prose paragraphs that are really bullet lists arrive as a single string
// with "- " markers on each line. These helpers detect and split them.
export function isBulletBlock(text) {
  return text.trimStart().startsWith('- ')
}

export function toBulletItems(text) {
  return text
    .split('\n')
    .map((line) => line.replace(/^\s*-\s+/, '').trim())
    .filter(Boolean)
}

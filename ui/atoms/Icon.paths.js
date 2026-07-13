import { controlGlyphs } from './Icon.controlGlyphs'
import { objectGlyphs } from './Icon.objectGlyphs'
import { peopleGlyphs } from './Icon.peopleGlyphs'

// SVG path data by icon name, merged from the glyph groups.
export const paths = { ...controlGlyphs, ...objectGlyphs, ...peopleGlyphs }

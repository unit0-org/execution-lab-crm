import { controlGlyphs } from './Icon.controlGlyphs'
import { objectGlyphs } from './Icon.objectGlyphs'

// SVG path data by icon name, merged from the two glyph groups.
export const paths = { ...controlGlyphs, ...objectGlyphs }

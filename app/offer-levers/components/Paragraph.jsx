import { Text } from '@/ui/atoms/Text'
import { BulletList } from './BulletList'
import { isBulletBlock } from '../bulletText'

// One paragraph of the guide: a bullet block becomes a list, everything
// else is body text.
export function Paragraph({ text }) {
  if (isBulletBlock(text)) return <BulletList text={text} />

  return <Text gutter="none">{text}</Text>
}

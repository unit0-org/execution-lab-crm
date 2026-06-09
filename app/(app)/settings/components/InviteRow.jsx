import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { CopyText } from '@/ui/molecules/CopyText'
import { InviteStatus } from './InviteStatus'
import { RevokeInvite } from './RevokeInvite'
import { joinUrl } from './joinUrl'

export function InviteRow({ invite, onChanged }) {
  return (
    <Tr>
      <Td>{invite.email}</Td>
      <Td><InviteStatus invite={invite} /></Td>
      <Td><CopyText value={joinUrl(invite.token)}>Copy link</CopyText></Td>
      <Td><RevokeInvite invite={invite} onChanged={onChanged} /></Td>
    </Tr>
  )
}

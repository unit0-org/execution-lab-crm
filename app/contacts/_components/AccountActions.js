import { syncAccount, disconnectAccount } from '../actions'
import { smallBtn, dangerBtn } from '../_styles/buttons'
import { inlineForm } from '../_styles'

export function AccountActions({ accountId }) {
  return (
    <>
      <form action={syncAccount} style={inlineForm}>
        <input type="hidden" name="account_id" value={accountId} />
        <button type="submit" style={smallBtn}>Sync</button>
      </form>
      <form action={disconnectAccount} style={inlineForm}>
        <input type="hidden" name="account_id" value={accountId} />
        <button type="submit" style={dangerBtn}>Disconnect</button>
      </form>
    </>
  )
}

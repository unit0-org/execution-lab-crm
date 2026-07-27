// How many times we take a refused balance back to the same card before
// leaving it to the registrant (who is emailed a link on the first
// failure) and to staff. Four daily tries covers a card that is merely
// out of funds for a few days.
export const MAX_CHARGE_ATTEMPTS = 4

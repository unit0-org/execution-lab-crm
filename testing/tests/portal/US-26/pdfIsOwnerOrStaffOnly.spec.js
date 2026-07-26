import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { skipUntil } from '../../../framework/skipUntil.js';

// NOT a gap in coverage — a gap in the code. /api/invoices/[id]/pdf has no
// auth or ownership check, and /api bypasses the route gates, so any signed
// -in user can read any invoice's PDF by guessing its id. A test here would
// fail, so this stays visibly unverified until the route is fixed. Already
// recorded as a gap on US-26 and US-30.
skipUntil('Invoice PDF route has no ownership check — behaviour not built');

verifyBehaviour('US-26', 3, async () => {});

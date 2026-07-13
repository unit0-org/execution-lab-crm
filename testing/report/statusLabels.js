export const STATUS_BADGES = {
  pass: { label: 'PASS', tone: 'ok' },
  partial: { label: 'PARTIAL', tone: 'warn' },
  fail: { label: 'FAIL', tone: 'crit' },
  'not-implemented': { label: 'NOT IMPLEMENTED', tone: 'faint' }
};

export const OUTCOME_MARKS = {
  passed: { mark: '✅', tone: 'ok' },
  failed: { mark: '❌', tone: 'crit' },
  skipped: { mark: '⏭', tone: 'faint' },
  missing: { mark: '⚪', tone: 'faint' }
};

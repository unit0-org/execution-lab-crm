// The guardrails that keep a fix honest. Chiefly: fix the app, never the test —
// a test edited into passing is worse than no test at all.
export const FIX_PROMPT_RULES = [
  '- Fix the APP, not the test. Do not weaken or rewrite the assertion.',
  '- Read AGENTS.md and ARCHITECTURE.md first; every rule there applies',
  '  (files <= 30 lines, 80 cols, logic in models, controllers stay thin).',
  '- The Feature Spec artifact is the source of truth for behaviour. If the',
  '  fix would change what the product does beyond making this story true,',
  '  update the spec and get approval BEFORE writing code.',
  '- Re-run `pnpm test && pnpm test:report`. This story must go green, and',
  '  no other story may regress.'
].join('\n');

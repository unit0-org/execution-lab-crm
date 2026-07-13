import { FIX_PROMPT_RULES } from './fixPromptRules.js';
import { pageSnapshot } from './pageSnapshot.js';

// Everything Claude Code needs to fix this one failure, and nothing else.
export function buildFixPrompt(story, behaviour, spec) {
  return [
    'A user story is failing its end-to-end test. Fix the bug.',
    '',
    `## User story — ${story.id} · ${story.domainTitle} · ${story.title}`,
    story.story,
    '',
    '## The behaviour that must hold, and does not',
    behaviour,
    '',
    '## The failing test (drives the app as a real user)',
    spec.file,
    '',
    '## What the test saw',
    spec.log,
    '',
    '## The page at the moment of failure',
    pageSnapshot(spec),
    '',
    '## Rules',
    FIX_PROMPT_RULES
  ].join('\n');
}

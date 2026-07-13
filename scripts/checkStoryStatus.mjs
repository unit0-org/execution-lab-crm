// Every user story must declare whether it is actually built.
//
// This exists because a story once sat in the Feature Spec for months with
// its behaviours written and no code behind them — the spec said the
// "What we know" panel collapsed; it never had. Declaring `implemented` is
// now mandatory, so shipping a story means making a claim someone can check.
//
// Fails when a story omits `implemented`, or is `'partial'` without naming
// the behaviours that are missing. `false` needs no `gaps` — nothing is built,
// so every behaviour is the gap.
import { userStories } from '../testing/userStories/index.js';

const VALID = [true, false, 'partial'];

const problems = [];

for (const story of userStories) {
  if (!VALID.includes(story.implemented))
    problems.push(`${story.id} — no \`implemented\` (true/false/partial)`);

  if (story.implemented === 'partial' && !story.gaps?.length)
    problems.push(`${story.id} — 'partial' but names no \`gaps\``);
}

const count = (value) =>
  userStories.filter((story) => story.implemented === value).length;

console.log(
  `${userStories.length} stories: ` +
  `${count(true)} built, ${count('partial')} partial, ${count(false)} not built`
);

for (const story of userStories.filter((s) => s.implemented !== true))
  console.log(`  ${story.id}  ${story.title} — ${story.gaps?.length ?? 0} gap(s)`);

if (problems.length) {
  console.error('\nSpec status problems:');
  problems.forEach((problem) => console.error(`  ${problem}`));
  process.exit(1);
}

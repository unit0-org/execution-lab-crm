import { escapeHtml } from './escapeHtml.js';
import { buildFixPrompt } from './buildFixPrompt.js';

// A failing row should hand you the fix, not just the bad news.
export function renderFixPrompt(spec, story, behaviour) {
  if (!spec || spec.outcome !== 'failed') return '';

  const index = story.behaviours.indexOf(behaviour) + 1;
  const id = `fix-${story.id}-${index}`;
  const prompt = escapeHtml(buildFixPrompt(story, behaviour, spec));

  return `<div class="fix">
      <button class="copy" type="button" data-fix="${id}">
        Copy fix prompt
      </button>
      <details class="sub">
        <summary>fix prompt</summary>
        <pre id="${id}">${prompt}</pre>
      </details>
    </div>`;
}

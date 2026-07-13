import { reportStyles } from './styles/index.js';
import { renderStats } from './renderStats.js';
import { renderDomain, renderLegend } from './renderDomain.js';
import { renderRunMeta } from './renderRunMeta.js';

export function renderPage(summary) {
  return `<title>User Stories — Test Report</title>
${reportStyles}
<div class="app">
  <header class="top">
    <div class="brand">The Execution Lab · <b>Test Report</b></div>
    <div class="when">${renderRunMeta(summary.run)}</div>
  </header>
  <main class="wrap">
    <h1>User stories — verified as the user</h1>
    <p class="lede">Every story in the Feature Spec, checked end-to-end through
      the running app. One test per behaviour.</p>
    ${renderStats(summary)}
    <div class="legend">${renderLegend()}</div>
    ${summary.results.map(renderDomain).join('')}
  </main>
</div>`;
}

// Renders the summarized results into one self-contained HTML page. The look
// mirrors the Feature Spec artifact (Montserrat + JetBrains Mono, neon accent,
// dark/light). No external assets, so the file opens anywhere or publishes as
// a Claude Artifact.

const BADGES = {
  pass: { label: 'PASS', cls: 'ok' },
  partial: { label: 'PARTIAL', cls: 'warn' },
  fail: { label: 'FAIL', cls: 'crit' },
  'not-implemented': { label: 'NOT IMPLEMENTED', cls: 'faint' }
};

const OUTCOME = {
  passed: { mark: '✅', cls: 'ok' },
  failed: { mark: '❌', cls: 'crit' },
  skipped: { mark: '⏭', cls: 'faint' },
  missing: { mark: '⚪', cls: 'faint' }
};

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function behaviourRow(story, text) {
  const wanted = `${story.id} · ${text}`;
  const spec = story.specs.find((item) => item.title === wanted);
  const key = spec ? spec.outcome : 'missing';
  const { mark, cls } = OUTCOME[key] || OUTCOME.missing;

  return `<li class="beh ${cls}"><span class="mk">${mark}</span>` +
    `<span class="bt">${esc(text)}</span></li>`;
}

function storyCard(story) {
  const badge = BADGES[story.status];
  const role = story.guarantee ? 'Guarantee' : story.role;
  const roleCls = story.guarantee ? 'guarantee' : '';
  const count = story.total ? `${story.passed}/${story.total}` : '';
  const behaviours = story.behaviours
    .map((text) => behaviourRow(story, text))
    .join('');

  return `<details class="story ${story.status}">
    <summary>
      <span class="badge ${badge.cls}">${badge.label}</span>
      <span class="sid">${story.id}</span>
      <span class="role ${roleCls}">${esc(role)}</span>
      <span class="stitle">${esc(story.title)}</span>
      <span class="scount">${count}</span>
    </summary>
    <div class="sbody">
      <p class="us">${esc(story.story)}</p>
      <ul class="behs">${behaviours}</ul>
    </div>
  </details>`;
}

function domainSection(domain) {
  const cards = domain.stories.map(storyCard).join('');

  return `<section class="sec">
    <h2>${esc(domain.title)}</h2>
    ${cards}
  </section>`;
}

function stat(value, label, cls) {
  return `<div class="stat"><b class="${cls || ''}">${value}</b>` +
    `<span>${esc(label)}</span></div>`;
}

export function renderReport({ summary, generatedAt, runLabel }) {
  const { results, counts, behavioursPassed, behavioursTotal } = summary;
  const totalStories = results.reduce((sum, d) => sum + d.stories.length, 0);
  const sections = results.map(domainSection).join('');
  const when = runLabel || generatedAt || 'not run yet';

  return `<title>User Stories — Test Report</title>
${STYLE}
<div class="app" id="app">
  <header class="top">
    <div class="brand">The Execution Lab · <b>Test Report</b></div>
    <div class="when">${esc(when)}</div>
  </header>
  <main class="wrap">
    <h1>User stories — verified as the user</h1>
    <p class="lede">Every story from the Feature Spec, checked end-to-end
      through the running app. One test per behaviour.</p>
    <div class="stats">
      ${stat(totalStories, 'Stories', '')}
      ${stat(counts.pass, 'Pass', 'ok')}
      ${stat(counts.partial, 'Partial', 'warn')}
      ${stat(counts.fail, 'Fail', 'crit')}
      ${stat(counts.notImplemented, 'Not implemented', 'faint')}
      ${stat(`${behavioursPassed}/${behavioursTotal}`, 'Behaviours', '')}
    </div>
    <div class="legend">
      <span class="badge ok">PASS</span>
      <span class="badge warn">PARTIAL</span>
      <span class="badge crit">FAIL</span>
      <span class="badge faint">NOT IMPLEMENTED</span>
    </div>
    ${sections}
  </main>
</div>`;
}

const STYLE = `<style>
:root{color-scheme:light dark}
.app{--bg:#0c0f14;--surface:#141a22;--surface2:#1a212b;--border:#28313d;
--text:#e8eef4;--muted:#94a3b2;--faint:#6b7787;--accent:#12e0c4;
--crit:#ff5f7a;--warn:#f0a53c;--ok:#42c76a;
--mono:ui-monospace,'JetBrains Mono','SF Mono',Menlo,Consolas,monospace;
--sans:'Montserrat','Segoe UI',system-ui,-apple-system,Helvetica,Arial,sans-serif;
background:var(--bg);color:var(--text);font-family:var(--sans);line-height:1.55;
min-height:100vh;font-size:15px}
@media(prefers-color-scheme:light){.app{--bg:#f6f8fa;--surface:#fff;
--surface2:#eef2f6;--border:#d5dde5;--text:#141a20;--muted:#4f5b68;
--faint:#7c8794;--accent:#068578}}
:root[data-theme=dark] .app{--bg:#0c0f14;--surface:#141a22;--surface2:#1a212b;
--border:#28313d;--text:#e8eef4;--muted:#94a3b2;--faint:#6b7787;--accent:#12e0c4}
:root[data-theme=light] .app{--bg:#f6f8fa;--surface:#fff;--surface2:#eef2f6;
--border:#d5dde5;--text:#141a20;--muted:#4f5b68;--faint:#7c8794;--accent:#068578}
.app *{box-sizing:border-box}
.top{position:sticky;top:0;z-index:9;display:flex;justify-content:space-between;
align-items:center;gap:16px;padding:11px 22px;border-bottom:1px solid var(--border);
background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px)}
.brand{font-family:var(--mono);font-size:11px;letter-spacing:.16em;
text-transform:uppercase;color:var(--accent);font-weight:600}
.brand b{color:var(--text)}
.when{font-family:var(--mono);font-size:11px;color:var(--faint)}
.wrap{max-width:960px;margin:0 auto;padding:26px 22px 90px}
h1{font-size:clamp(24px,4vw,34px);margin:6px 0 8px;font-weight:700}
.lede{color:var(--muted);max-width:64ch;margin:0 0 18px}
.stats{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 14px}
.stat{background:var(--surface);border:1px solid var(--border);border-radius:10px;
padding:9px 14px;min-width:92px}
.stat b{display:block;font-size:20px;font-family:var(--mono);
font-variant-numeric:tabular-nums}
.stat b.ok{color:var(--ok)}.stat b.warn{color:var(--warn)}
.stat b.crit{color:var(--crit)}.stat b.faint{color:var(--faint)}
.stat span{font-size:10px;text-transform:uppercase;letter-spacing:.07em;
color:var(--faint)}
.legend{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 22px}
.badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.08em;
padding:3px 7px;border-radius:5px;border:1px solid var(--border);white-space:nowrap}
.badge.ok{color:var(--ok);border-color:color-mix(in srgb,var(--ok) 45%,var(--border))}
.badge.warn{color:var(--warn);border-color:color-mix(in srgb,var(--warn) 45%,var(--border))}
.badge.crit{color:var(--crit);border-color:color-mix(in srgb,var(--crit) 45%,var(--border))}
.badge.faint{color:var(--faint)}
.sec{margin-top:26px}
.sec>h2{font-size:12px;font-family:var(--mono);letter-spacing:.13em;
text-transform:uppercase;color:var(--accent);border-top:1px solid var(--border);
padding-top:16px;margin:0 0 8px}
.story{background:var(--surface);border:1px solid var(--border);border-radius:10px;
margin:8px 0;overflow:hidden}
.story.fail{border-color:color-mix(in srgb,var(--crit) 40%,var(--border))}
.story.pass{border-color:color-mix(in srgb,var(--ok) 30%,var(--border))}
.story>summary{cursor:pointer;padding:11px 15px;display:flex;align-items:center;
gap:10px;flex-wrap:wrap;list-style:none}
.story>summary::-webkit-details-marker{display:none}
.sid{font-family:var(--mono);font-size:12px;color:var(--accent);font-weight:600}
.role{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.08em;
text-transform:uppercase;padding:2px 6px;border-radius:5px;background:var(--surface2);
color:var(--muted);border:1px solid var(--border)}
.role.guarantee{color:var(--accent);
border-color:color-mix(in srgb,var(--accent) 45%,var(--border))}
.stitle{flex:1;font-weight:600;min-width:180px}
.scount{font-family:var(--mono);font-size:12px;color:var(--muted);
font-variant-numeric:tabular-nums}
.sbody{padding:2px 15px 14px}
.us{color:var(--muted);margin:2px 0 8px;padding-left:11px;
border-left:2px solid var(--border);max-width:70ch}
.behs{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:2px}
.beh{display:flex;gap:9px;align-items:flex-start;padding:3px 2px;font-size:14px}
.beh .mk{flex:none;font-size:13px;line-height:1.4}
.beh.crit .bt{color:var(--text)}
.beh.faint .bt{color:var(--faint)}
.beh .bt{flex:1}
</style>`;

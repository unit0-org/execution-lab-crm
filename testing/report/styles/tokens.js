// Design tokens, mirroring the Feature Spec artifact and the app's theme.
export const tokens = `
:root{color-scheme:light dark}
.app{--bg:#0c0f14;--surface:#141a22;--surface2:#1a212b;--border:#28313d;
--text:#e8eef4;--muted:#94a3b2;--faint:#6b7787;--accent:#12e0c4;
--crit:#ff5f7a;--warn:#f0a53c;--ok:#42c76a;
--mono:ui-monospace,'JetBrains Mono','SF Mono',Menlo,Consolas,monospace;
--sans:'Montserrat','Segoe UI',system-ui,-apple-system,Helvetica,
Arial,sans-serif;
background:var(--bg);color:var(--text);font-family:var(--sans);
line-height:1.55;min-height:100vh;font-size:15px}
@media(prefers-color-scheme:light){.app{--bg:#f6f8fa;--surface:#fff;
--surface2:#eef2f6;--border:#d5dde5;--text:#141a20;--muted:#4f5b68;
--faint:#7c8794;--accent:#068578}}
:root[data-theme=dark] .app{--bg:#0c0f14;--surface:#141a22;
--surface2:#1a212b;--border:#28313d;--text:#e8eef4;--muted:#94a3b2;
--faint:#6b7787;--accent:#12e0c4}
:root[data-theme=light] .app{--bg:#f6f8fa;--surface:#fff;--surface2:#eef2f6;
--border:#d5dde5;--text:#141a20;--muted:#4f5b68;--faint:#7c8794;
--accent:#068578}
.app *{box-sizing:border-box}
`;

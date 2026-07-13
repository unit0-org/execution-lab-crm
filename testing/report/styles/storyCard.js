export const storyCard = `
.story{background:var(--surface);border:1px solid var(--border);
border-radius:10px;margin:8px 0;overflow:hidden}
.story.fail{border-color:color-mix(in srgb,var(--crit) 40%,var(--border))}
.story.pass{border-color:color-mix(in srgb,var(--ok) 30%,var(--border))}
.story>summary{cursor:pointer;padding:11px 15px;display:flex;
align-items:center;gap:10px;flex-wrap:wrap;list-style:none}
.story>summary::-webkit-details-marker{display:none}
.story>summary:focus-visible{outline:2px solid var(--accent)}
.sid{font-family:var(--mono);font-size:12px;color:var(--accent);
font-weight:600}
.role{font-family:var(--mono);font-size:9px;font-weight:700;
letter-spacing:.08em;text-transform:uppercase;padding:2px 6px;
border-radius:5px;background:var(--surface2);color:var(--muted);
border:1px solid var(--border)}
.role.guarantee{color:var(--accent);
border-color:color-mix(in srgb,var(--accent) 45%,var(--border))}
.stitle{flex:1;font-weight:600;min-width:180px}
.scount{font-family:var(--mono);font-size:12px;color:var(--muted);
font-variant-numeric:tabular-nums}
`;

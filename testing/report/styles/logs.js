export const logs = `
.beh .dur{flex:none;font-family:var(--mono);font-size:11px;
color:var(--faint);font-variant-numeric:tabular-nums;min-width:46px;
text-align:right}
.log{margin:5px 0 2px}
.log>summary{cursor:pointer;font-family:var(--mono);font-size:10px;
letter-spacing:.06em;text-transform:uppercase;color:var(--faint);
padding:2px 0;list-style:none}
.log>summary::-webkit-details-marker{display:none}
.log>summary::before{content:"▸ ";color:var(--accent)}
.log[open]>summary::before{content:"▾ "}
.log>summary:hover{color:var(--accent)}
.log>summary:focus-visible{outline:2px solid var(--accent)}
.log pre{overflow-x:auto;background:var(--surface2);
border:1px solid var(--border);border-radius:7px;padding:10px 12px;
font-family:var(--mono);font-size:12px;line-height:1.5;color:var(--text);
white-space:pre-wrap;word-break:break-word;margin:5px 0}
.log .files{display:flex;flex-wrap:wrap;gap:7px;margin:2px 0 6px}
.log .files a{font-family:var(--mono);font-size:11px;color:var(--accent);
border:1px solid var(--border);border-radius:6px;padding:2px 8px}
.log .files a:hover{border-color:var(--accent);text-decoration:none}
`;

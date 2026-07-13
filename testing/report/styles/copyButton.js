export const copyButton = `
.fix{margin:9px 0 3px}
.copy{font-family:var(--mono);font-size:11px;font-weight:700;
letter-spacing:.06em;text-transform:uppercase;cursor:pointer;
color:var(--bg);background:var(--accent);border:1px solid var(--accent);
border-radius:7px;padding:7px 13px}
.copy:hover{filter:brightness(1.08)}
.copy:active{transform:translateY(1px)}
.copy:focus-visible{outline:2px solid var(--text);outline-offset:2px}
@media(prefers-reduced-motion:reduce){.copy:active{transform:none}}
`;

export const layout = `
.top{position:sticky;top:0;z-index:9;display:flex;
justify-content:space-between;align-items:center;gap:16px;padding:11px 22px;
border-bottom:1px solid var(--border);
background:color-mix(in srgb,var(--bg) 88%,transparent);
backdrop-filter:blur(10px)}
.brand{font-family:var(--mono);font-size:11px;letter-spacing:.16em;
text-transform:uppercase;color:var(--accent);font-weight:600}
.brand b{color:var(--text)}
.when{font-family:var(--mono);font-size:11px;color:var(--faint)}
.wrap{max-width:960px;margin:0 auto;padding:26px 22px 90px}
h1{font-size:clamp(24px,4vw,34px);margin:6px 0 8px;font-weight:700}
.lede{color:var(--muted);max-width:64ch;margin:0 0 18px}
.stats{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 14px}
.stat{background:var(--surface);border:1px solid var(--border);
border-radius:10px;padding:9px 14px;min-width:92px}
.stat b{display:block;font-size:20px;font-family:var(--mono);
font-variant-numeric:tabular-nums}
.stat b.ok{color:var(--ok)}.stat b.warn{color:var(--warn)}
.stat b.crit{color:var(--crit)}.stat b.faint{color:var(--faint)}
.stat span{font-size:10px;text-transform:uppercase;letter-spacing:.07em;
color:var(--faint)}
.legend{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 22px}
.sec{margin-top:26px}
.sec>h2{font-size:12px;font-family:var(--mono);letter-spacing:.13em;
text-transform:uppercase;color:var(--accent);
border-top:1px solid var(--border);padding-top:16px;margin:0 0 8px}
`;

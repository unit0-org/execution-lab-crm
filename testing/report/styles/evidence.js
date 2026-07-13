export const evidence = `
.log .shot{margin:7px 0}
.log .shot img{max-width:100%;height:auto;display:block;
border:1px solid var(--border);border-radius:7px}
.log .shot figcaption{font-family:var(--mono);font-size:10px;
letter-spacing:.06em;text-transform:uppercase;color:var(--faint);
margin-top:5px}
.log .sub{margin:7px 0}
.log .sub>summary{cursor:pointer;font-family:var(--mono);font-size:10px;
letter-spacing:.06em;text-transform:uppercase;color:var(--faint);
list-style:none}
.log .sub>summary::-webkit-details-marker{display:none}
.log .sub>summary::before{content:"▸ ";color:var(--accent)}
.log .sub[open]>summary::before{content:"▾ "}
.log .sub>summary:hover{color:var(--accent)}
.log .sub>summary:focus-visible{outline:2px solid var(--accent)}
`;

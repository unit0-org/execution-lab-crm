## What & why

<!-- One or two sentences. Keep the PR small and easy to review. -->

## Rules checklist (see AGENTS.md)

CI enforces lint + build. Confirm the review-only rules:

- [ ] Atomic design; UI components live in `ui/` (2-level-max folders)
- [ ] Structure / style / behavior are in separate files; behavior in hooks
- [ ] `ui/` encapsulates look & feel; components take props, not styles
- [ ] Reuses existing components/code; composed, not copy-pasted
- [ ] 3rd-party libraries are encapsulated before use
- [ ] Every action gives feedback (on-screen mutation or toast)
- [ ] DB changes are normalized, simple, `snake_case` singular, UUID v4
- [ ] ERD included for any DB structural change

-- Labels (categories) now carry a color, shown as Gmail-style colored pills.
-- Stored as a palette key (e.g. 'blue', 'green'), not a hex, so every label
-- stays on the design system; null falls back to the accent color in the UI.

alter table contact_category
  add column color text;

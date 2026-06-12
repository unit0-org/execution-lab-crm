-- Email template bodies are now authored as plain text (a blank line
-- starts a new paragraph), turned into HTML at send time. Convert any
-- existing HTML bodies to clean plain text so the editor and preview no
-- longer show raw tags. Links become "label: url" (the url is the var).
update email_template
set body = btrim(
  regexp_replace(                                  -- decode &amp;
    regexp_replace(                                -- strip leftover tags
      replace(replace(replace(replace(replace(
        regexp_replace(                            -- <a href=x>y</a> -> y: x
          body,
          '<a href="([^"]*)">([^<]*)</a>', E'\\2: \\1', 'g'),
        '&mdash;', U&'\2014'),                     -- em dash
        '</p>', E'\n\n'),
        '<br/>', E'\n'),
        '<br />', E'\n'),
        '<br>', E'\n'),
      '<[^>]+>', '', 'g'),
    '&amp;', '&', 'g'),
  E' \n\t')
where body like '%<%>%';

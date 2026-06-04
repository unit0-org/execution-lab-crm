-- contact.category_id is fully superseded by contact_category_link.
-- Drop it (and its FK to contact_category) so categories can be deleted
-- without a foreign-key violation.
alter table contact drop column category_id;

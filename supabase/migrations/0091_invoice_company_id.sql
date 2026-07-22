-- An invoice can bill a company instead of a contact (mutually exclusive
-- at the app layer). SET NULL keeps the invoice + its bill-to snapshot if
-- the company is removed.
alter table invoice
  add column company_id uuid references company (id) on delete set null;

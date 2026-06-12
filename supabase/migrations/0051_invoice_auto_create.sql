-- Auto-create a draft invoice for every Stripe payment so it lands in the
-- review queue. Sending stays manual (auto_send is left untouched).
update invoice_setting set auto_create = true where auto_create = false;
alter table invoice_setting alter column auto_create set default true;

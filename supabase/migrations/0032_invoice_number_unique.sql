-- Invoice numbers are unique within an organization.

create unique index invoice_org_number on invoice (organization_id, number);

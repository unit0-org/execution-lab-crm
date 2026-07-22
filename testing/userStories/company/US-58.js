const userStory = {
  id: 'US-58',
  implemented: true,
  role: 'Staff',
  title: 'Associate contacts to companies',
  story:
    'As a staff member, I can link a person to a company as an owner or ' +
    'employee, so that I see the relationship from both sides.',
  behaviours: [
    'From a company page I can add a contact with a role (owner or ' +
      'employee), and it shows in the company contacts table.',
    'A contact page lists every company the contact belongs to with ' +
      'their role.',
    'A contact can belong to many companies, one role per company.',
    'Removing a company-contact link asks for confirmation first.',
    'The company link is folded into contact-merge, so merging keeps it.'
  ]
};

export default userStory;

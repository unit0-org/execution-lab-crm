import { givenAContact } from '../../../database/factories/givenAContact.js';
import { givenALabel } from '../../../database/factories/givenALabel.js';
import { labelContact } from '../../../database/factories/labelContact.js';

// Three people: one carrying both labels, one carrying only VIP, one unfiled.
export async function seedLabelledContacts() {
  const both = await givenAContact();
  const vipOnly = await givenAContact();
  const unlabelled = await givenAContact();
  const vip = await givenALabel({ name: 'VIP' });
  const investor = await givenALabel({ name: 'Investor' });

  await labelContact(both.id, vip.id);
  await labelContact(both.id, investor.id);
  await labelContact(vipOnly.id, vip.id);

  return { both, vipOnly, unlabelled, vip, investor };
}

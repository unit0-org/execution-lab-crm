const userStory = {
  id: 'US-15',
  implemented: true,
  role: 'System',
  guarantee: true,
  title: 'One discount applies — never stacked',
  story:
    'As the business, I need exactly one discount to apply per ' +
    'registration, resolved the same way for the price shown and the price ' +
    'charged, so that pricing is predictable.',
  behaviours: [
    "Precedence is: a customer's own code, then an earned reward, then the " +
      "cohort's preset, then none.",
    'An invalid customer code falls back to the earned reward — not to full ' +
      'price.',
    'The struck-through "was" price only appears when the discount actually ' +
      'lowers the price.',
    "The price shown on the card matches what's charged at checkout."
  ]
};

export default userStory;

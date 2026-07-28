// A run that stops part-way says how far it got and why: a batch that
// quietly does nothing is the worst outcome there is.
export const stoppedMessage = (landed, error) =>
  `Stopped after ${landed} applied — ${error.message}`

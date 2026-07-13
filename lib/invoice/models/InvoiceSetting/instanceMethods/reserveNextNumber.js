const pad = (n) => String(n).padStart(4, '0')

// Reserve and return this org's next sequential invoice number.
export async function reserveNextNumber() {
  const number = `${this.number_prefix}${pad(this.next_number)}`

  await this.update({ next_number: this.next_number + 1 })

  return number
}

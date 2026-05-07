// Render one <input type="hidden" name="contact_id"> per id —
// FormData.getAll('contact_id') picks them up server-side.
export function HiddenContactIds({ ids }) {
  return (
    <>
      {[...ids].map((id) => (
        <input key={id} type="hidden" name="contact_id" value={id} />
      ))}
    </>
  )
}

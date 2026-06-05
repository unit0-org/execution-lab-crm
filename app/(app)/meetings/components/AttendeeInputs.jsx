// Hidden inputs carrying the chosen attendee emails on submit.
export function AttendeeInputs({ chosen }) {
  return (
    <>
      {chosen.map((item) => (
        <input key={item.value} type="hidden" name="emails"
          value={item.email} />
      ))}
    </>
  )
}

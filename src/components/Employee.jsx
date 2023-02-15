const Employee = (props) => {
  return (
    <>
      <h2>Employee {props.name}</h2>
      <p>{props.role ? props.role : 'no role'}</p>
    </>
  )
}
export default Employee
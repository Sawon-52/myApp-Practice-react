export default function Profile(props) {
  return (
    <>
      <div className="card">
        <h2>Name: {props.name}</h2>
        <h3>Locaton: {props.location}</h3>
        <h4>Age: {props.age}</h4>
        <h5>Student</h5>
      </div>
    </>
  );
}

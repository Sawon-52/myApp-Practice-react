import "./Player.css";
export default function Player({ singlePlayer }) {
  return (
    <>
      <div className="player" style={{display:'flex', flexDirection:'column'}}>
        <h2>Name: {singlePlayer.name}</h2>
        <h3>Age: {singlePlayer.age} </h3>
      </div>
    </>
  );
}

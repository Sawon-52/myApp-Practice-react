import "./Player.css";
export default function Player({ singlePlayer }) {
  console.log(singlePlayer);
  return (
    <>
      <div className="player">
        <h2>Name: {singlePlayer.name}</h2>
        <h3>Age: {singlePlayer.age} </h3>
      </div>
    </>
  );
}
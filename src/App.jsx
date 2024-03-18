import "./App.css";
import Todo from "./Todo";
import Profile from "./Profile";
import Actor from "./Actor";
import Player from "./Player";

function App() {
  const actors = ["Shakib khan", "Jayed khan", "Bappi roy", "Salman Sha"];

  const cricketPlayers = [
    { id: 1, name: "Shakib-Al-Hasan", age: 30 },
    { id: 2, name: "Tamim Iqbal", age: 30 },
    { id: 3, name: "Musfiqur Rahim", age: 32 },
    { id: 4, name: "Muztafizur Rahman", age: 25 },
    { id: 5, name: "Mehedi Miraz", age: 25 },
    { id: 6, name: "Mahmudullah", age: 32 },
  ];

  function handleClick(peram) {
    alert(peram);
  }

  return (
    <>
      {cricketPlayers.map((player) => (
        <Player singlePlayer={player}> </Player>
      ))}

      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <Profile name="Mehedi Hasan" location="Rajshahi" age="23 years" />
      <Profile name="Abdur Rahim" location="Dhaka" age="25 years" />
      <Todo task="learn React " isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>

      <button onClick={() => handleClick("Clicked")}>Click Me</button>
    </>
  );
}

export default App;

import "./App.css";
import Todo from "./Todo";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Profile name="Mehedi Hasan" location="Rajshahi" age="23 years" />
      <Profile name="Abdur Rahim" location="Dhaka" age="25 years" />
      <Todo task="learn React " isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
    </>
  );
}

export default App;

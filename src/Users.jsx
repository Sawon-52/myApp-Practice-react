import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="box">
      <h3>Users: {users.length}</h3>

      {users.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

/*
*1.state to hold data
2.UseEffect with dependency array
3use fetch to load data
4set loaded data to the state
5display data on the component

* 
*/

// export default function Todo({ task, isDone }) {
//   return (
//     <>
//       <li>{task} </li>
//     </>
//   );
// }


// conditional rendaring
export default function Todo({ task, isDone }) {
  if (isDone) {
    return <li>Finisd: {task}</li>;
  } else {
    return <li>Work On: {task}</li>;
  }
}

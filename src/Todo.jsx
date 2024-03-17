// export default function Todo({ task, isDone }) {
//   return (
//     <>
//       <li>{task} </li>
//     </>
//   );
// }

// conditional rendaring
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finisd: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// conditional rendering option 02 : ternany oparetor
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"} {task}
//     </li>
//   );
// }

// conditional rendering option 03 : && oparetor
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ": Done"}
//     </li>
//   );
// }

// conditional rendering option 03 : || oparetor
export default function Todo({ task, isDone }) {
  return (
    <li>
      {task}
      {isDone || ": Do it"}
    </li>
  );
}

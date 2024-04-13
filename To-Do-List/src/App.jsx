// import React, { useState } from "react";
// import "./index.css";
// import Main from "./Main";
// import Lists from "./Lists";

// const App = ( ) => {
//   const [todo, setTodo] = useState([
//     { id: 1, detail: "task 1" },
//     { id: 2, detail: "task 2" },
//     { id: 3, detail: "task 3" }
//   ]);

//   const handleDelete = (id) => {
//     setTodo(todo.filter(item => item.id !== id));

//   };

//   return (
//     <>
//       <Main />
//       <div>
//         {todo.map((item) => (
//           <Lists
//             key={item.id}
//             id={item.id}
//             detail={item.detail}
//             handleDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./index.css";
// import Main from "./Main";
// import Lists from "./Lists";
// // import Task from "./Task";

// const App = () => {
//   const [todo, setTodo] = useState([
//     // { id: 1, detail: "task 1" },
//     // { id: 2, detail: "task 2" },
//     // { id: 3, detail: "task 3" }
//   ]);
//   const inputhandler = (e) => {
//     setTodo(e.target.value);
//   };
//   const onsubmit = (e) => {
//     e.prevent.default();
//     console.log(todo);
//   };

//   const handleDelete = (id) => {
//     setTodo(todo.filter((item) => item.id !== id));
//   };

//   return (
//     <>
//       <Main />
//       <div>
//         {todo.map((item) => (
//           <Lists
//             key={item.id}
//             id={item.id}
//             detail={item.detail}
//             handleDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;


import React from 'react'
import Main from './Main'
import ToDoList from './ToDoList'

const App = () => {
  return (
    <>
    <Main/>
    <ToDoList/>
    </>
  )
}

export default App

import React, { useState } from "react";
import MyList from "./Assets/pen.gif";
import ToDoList from "./ToDoList";
import Plus from "./Assets/Plus.gif";
import { CiCirclePlus } from "react-icons/ci";

const Main = () => {
  const [plus, setPlus] = useState(true);
  const handleClick = () => {
    setPlus(!plus);
  };

  const [todolist, setTodolist] = useState([]);
  const handleSubmit = (e) => {
    const todoname = e.target.todoname.value;
    if (!todolist.includes(todoname)) {
      const finaltodo  =[...todolist,todoname]
      setTodolist(finaltodo)
    }
    else{
      alert("already exist")
    }
    e.preventDefault();
  };
  

  return (
    <>
      <section>
        <div className="main" style={{ cursor: "pointer" }}>
          <div className="heading">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={MyList} style={{ height: "55px" }} alt="Pen" />
              <h1 style={{ marginLeft: "10px" }}>To Do List App</h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
         <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
         <input required="true" name="todoname" type="text" placeholder="Enter your task here..." />
            <span>
                <button type="submit"
                  onClick={() => {
                    handleClick()
                  }}
                  className="border"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                > 
                  {plus ? (
                    <CiCirclePlus size={40} style={{  marginTop:'0px',
                  }}  />
                  ) : (
                    <img           onMouseLeave={() => setPlus(true)}
                    src={Plus} alt="img" style={{ height: "45px" }} />
                  )}
                </button>
         </span>
         </form>
          </div>
        </div>
      </section>
      <ToDoList todolist={todolist}  todolists={todolist} setTodolist={setTodolist} />
    </>
  );
};

export default Main;

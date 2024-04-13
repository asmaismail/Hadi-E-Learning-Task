import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";


const ToDoList = () => {
  const myDate = new Date();
  const handleToggleCompletion = (id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, completed: !tasks.completed } : tasks
      )
    );
  };


  const [tasks, setTasks] = useState([
    {
        id:1,
      name: "name1",
      detail: "deatil1",
            completed: false,

    },
    {
        id:2,
        name: "name2",
        detail: "deatil2",
              completed: false,

      },{
        id:3,
        name: "name3",
        detail: "deatil3",
              completed: false,

      },
  ]);
  const taskDone = (id) =>{
  }
  const handleDelete = (id) => {
       setTasks(tasks.filter((item) => item.id !== id));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <div
          style={{
            width: "70%",
            borderRadius: "10px",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          {tasks.map((tasks, id) => (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor:'yellow',
                borderRadius:'10px',
                padding:'15px',
                marginTop:'20px'
              }}
            >
              <div style={{ marginLeft: "0%" }}>
                <div style={{ marginTop: "0" }}>
                  {tasks.name}

                  {tasks.detail}
                </div>
              </div>
              <div
                style={{
                  margin: "7px",
                  justifyContent: "space-between",
                  fontSize: "20px",
                  cursor: "pointer",
                  width: "80px",
                }}
              >
                <FaRegPenToSquare
                  style={{ color: "black", marginRight: "10px" }}
                />
                <TiTick onClick={() => handleToggleCompletion(tasks.id)} style={{marginRight:'10px'}}/>
                <MdDelete onClick={()=> handleDelete()} style={{ color: "red" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;

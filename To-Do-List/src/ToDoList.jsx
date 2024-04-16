import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import './index.css'

const ToDoList = ({todolist, indexNumber, todolists, setTodolist}) => {
    const handleDelete = (index) => {
       setTodolist(todolist.filter((task) => task.index !== index));
  };
  const [done, setDone] = useState(false);
  const handleToggleCompletion =() =>{
    setDone(!done);
  }
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
           {todolist.map((task, index) => (

            <div   className={`${done ? 'taskdone' : ''}`}
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor:'yellow',
                borderRadius:'10px',
                padding:'15px',
                marginTop:'20px'
                
              }} 
              onClick={() => handleToggleCompletion(index)} 

             > 
             {task}
             {index}
        
              <div style={{ marginLeft: "0%" }}>
                <div style={{ marginTop: "0" }}>
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
                <TiTick 
                // onClick={() => handleToggleCompletion()}
                 style={{marginRight:'10px'}}/>
                <MdDelete
                 onClick={()=> handleDelete()}
                 style={{ color: "red" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;


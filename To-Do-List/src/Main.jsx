import React, { useState } from "react";
import MyList from "./Assets/pen.gif";
import Plus from "./Assets/Plus.gif";
import { CiCirclePlus } from "react-icons/ci";
import { Button, message, Space } from "antd";

const Main = () => {
  const [plus, setPlus] = useState(true);
  const handleClick = () => {
    setPlus(!plus);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Note added successfully!",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  

  return (
    <>
      {contextHolder}

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
         <form onSubmit={handleSubmit}>
         <input required="true" type="text" placeholder="Enter your task here..." />
            <span>
              <Space>
                <button type="submit"
                  onClick={() => {
                    success();
                    // handleClick();
                  }}
                  className="border"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                > Add me
                  {/* {plus ? (
                    <CiCirclePlus style={{ fontSize: "40px" }} />
                  ) : (
                    <img src={Plus} alt="img" style={{ height: "45px" }} />
                  )} */}
                </button>
              </Space>
         </span>
         </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

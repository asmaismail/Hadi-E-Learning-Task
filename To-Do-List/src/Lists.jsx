// import React from "react";
// import { TiTick } from "react-icons/ti";
// import { MdDelete } from "react-icons/md";
// import { Button, Space, message } from "antd";

// const Lists = ({ id, detail, handleDelete, inputhandler, onsubmit }) => {
//   const onDeleteClick = () => {
//     handleDelete(id);
//   };

//   const [messageApi, contextHolder] = message.useMessage();
//   const success = () => {
//     messageApi.open({
//       type: "danger",
//       content: "Note deleted successfully!",
//     });
//   };


//   return (
//     <>
//       {contextHolder}
//       <div
//         style={{
//           display: "flex",
//           marginTop: "20px",
//           width: "full",
//           height: "auto",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "yellow",
//             color: "black",
//             marginBottom: "30px",
//             padding: "30px",
//             borderRadius: "20px",
//             width: "80%",
//             alignItems: "center",
//           }}
//           className="flex flex-row"
//         >
//           <div
//             style={{
//               backgroundColor: "orange",
//               width: "100%",
//               justifyContent: "space-between",
//               display: "flex",
//             }}
//           >
//             id: {id}
//             detail: {detail}
//             <div style={{ gap: "20px" }}>
//               <Button onClick={success} style={{}}>
//                 <TiTick />
//               </Button>
//               <Space>
//                 <Button
//                   onClick={() => {
//                     success();
//                     onDeleteClick();
//                   }}
//                 >
//                   <MdDelete />
//                 </Button>
//               </Space>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Lists;


import React from "react";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { Button, Space, message } from "antd";

const Lists = ({ id, detail, handleDelete, inputhandler, onsubmit }) => {
  const onDeleteClick = () => {
    handleDelete(id);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "danger",
      content: "Note deleted successfully!",
    });
  };


  return (
    <>
      {contextHolder}
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          width: "full",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "yellow",
            color: "black",
            marginBottom: "30px",
            padding: "30px",
            borderRadius: "20px",
            width: "80%",
            alignItems: "center",
          }}
          className="flex flex-row"
        >
          <div
            style={{
              backgroundColor: "orange",
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            id: {id}
            detail: {detail}
            <div style={{ gap: "20px" }}>
              <Button onClick={success} style={{}}>
                <TiTick />
              </Button>
              <Space>
                <Button
                  onClick={() => {
                    success();
                    onDeleteClick();
                  }}
                >
                  <MdDelete />
                </Button>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;

